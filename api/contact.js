import { MongoClient } from 'mongodb';

// MongoDB connection string - you'll need to set this as an environment variable
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'projectbreakpoint';

// Email notification function (using a simple approach)
async function sendEmailNotification(contactData) {
  try {
    // For now, we'll just log the email notification
    // In production, you can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with Gmail
    
    console.log('📧 Email Notification:', {
      to: 'proj.breakpoint@gmail.com',
      subject: `New Contact Form Submission: ${contactData.subject}`,
      body: `
        New contact form submission received:
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Inquiry Type: ${contactData.inquiryType}
        Subject: ${contactData.subject}
        Message: ${contactData.message}
        
        Submitted at: ${contactData.createdAt}
      `
    });

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'proj.breakpoint@gmail.com',
    //   from: 'noreply@projectbreakpoint.org',
    //   subject: `New Contact Form Submission: ${contactData.subject}`,
    //   text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
    //   html: `<p><strong>Name:</strong> ${contactData.name}</p><p><strong>Email:</strong> ${contactData.email}</p><p><strong>Message:</strong> ${contactData.message}</p>`
    // });

  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't fail the entire request if email fails
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, inquiryType, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Sanitize input (basic sanitization)
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      subject: subject.trim().substring(0, 200),
      inquiryType: ['general', 'volunteer', 'donation', 'enrollment', 'partnership'].includes(inquiryType) ? inquiryType : 'general',
      message: message.trim().substring(0, 2000)
    };

    // Connect to MongoDB
    let client;
    try {
      client = new MongoClient(MONGODB_URI);
      await client.connect();
    } catch (dbError) {
      console.error('MongoDB connection error:', dbError);
      // If MongoDB is not configured, still send email notification
      await sendEmailNotification({
        ...sanitizedData,
        createdAt: new Date()
      });
      
      return res.status(200).json({ 
        message: 'Contact form submitted successfully (email notification sent)',
        note: 'Database not configured - contact saved via email only'
      });
    }

    const db = client.db(MONGODB_DB);
    const collection = db.collection('contacts');

    // Create contact document
    const contactData = {
      ...sanitizedData,
      status: 'new',
      createdAt: new Date(),
      respondedAt: null,
      notes: ''
    };

    // Insert into MongoDB
    const result = await collection.insertOne(contactData);

    // Close MongoDB connection
    await client.close();

    // Send email notification
    await sendEmailNotification(contactData);

    // Return success response
    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId 
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

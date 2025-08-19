# Contact Form Setup Guide

## 🎯 Overview
The contact form has been modernized with Tailwind CSS and includes MongoDB integration for data storage and email notifications.

## ✅ What's Been Implemented

### Frontend (React)
- ✅ Modern Tailwind CSS design
- ✅ Comprehensive contact form with validation
- ✅ Real-time form state management
- ✅ Loading states and success/error messages
- ✅ Responsive design for all devices
- ✅ Enhanced contact information section

### Backend (Vercel Functions)
- ✅ API endpoint at `/api/contact`
- ✅ MongoDB integration for data storage
- ✅ Input validation and sanitization
- ✅ Email notification system (logging for now)
- ✅ Error handling and graceful fallbacks

## 🗄️ MongoDB Setup

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier available)

### 2. Get Connection String
1. In your cluster, click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password
5. Replace `<dbname>` with `projectbreakpoint`

### 3. Set Environment Variables
Create a `.env.local` file in your project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/projectbreakpoint?retryWrites=true&w=majority
MONGODB_DB=projectbreakpoint
```

## 📧 Email Notifications Setup

### Option 1: SendGrid (Recommended)
1. Sign up for [SendGrid](https://sendgrid.com/) (free tier available)
2. Install: `npm install @sendgrid/mail`
3. Get API key from SendGrid dashboard
4. Add to `.env.local`:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```
5. Uncomment and update the SendGrid code in `/api/contact.js`

### Option 2: Nodemailer with Gmail
1. Install: `npm install nodemailer`
2. Enable 2-factor authentication on Gmail
3. Generate app password
4. Add to `.env.local`:
   ```env
   GMAIL_USER=your_email@gmail.com
   GMAIL_PASS=your_app_password
   ```

### Option 3: Keep Console Logging (Current)
The current implementation logs email notifications to the console. This is fine for development and testing.

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `MONGODB_DB`
   - `SENDGRID_API_KEY` (if using SendGrid)

### Local Development
1. Install dependencies: `npm install`
2. Create `.env.local` with your environment variables
3. Run: `npm start`

## 📊 Database Schema

The contact form data is stored with this structure:

```javascript
{
  name: String,           // User's full name
  email: String,          // User's email address
  subject: String,        // Message subject
  inquiryType: String,    // "general", "volunteer", "donation", "enrollment", "partnership"
  message: String,        // User's message
  status: String,         // "new", "responded", "resolved"
  createdAt: Date,        // Submission timestamp
  respondedAt: Date,      // Response timestamp (null initially)
  notes: String           // Internal notes
}
```

## 🔧 Customization Options

### Form Fields
- Add/remove fields in `/src/pages/Contact.jsx`
- Update validation in `/api/contact.js`
- Modify database schema as needed

### Styling
- All styling uses Tailwind CSS classes
- Colors match the green theme (`green-600`, `emerald-600`)
- Responsive design included

### Email Templates
- Customize email content in `sendEmailNotification()` function
- Add HTML templates for better formatting
- Include branding and logos

## 🛡️ Security Features

- ✅ Input sanitization
- ✅ Email format validation
- ✅ Field length limits
- ✅ CORS protection (handled by Vercel)
- ✅ Rate limiting (can be added)

## 📈 Analytics & Management

### View Submissions
1. Access MongoDB Atlas dashboard
2. Navigate to your database
3. View the `contacts` collection

### Future Enhancements
- Admin dashboard for managing submissions
- Export functionality
- Analytics dashboard
- Automated follow-up emails

## 🆘 Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify API endpoint is accessible
- Ensure all required fields are filled

### MongoDB Connection Issues
- Verify connection string format
- Check network connectivity
- Ensure IP whitelist includes your IP

### Email Not Sending
- Check environment variables
- Verify API keys are correct
- Check service provider status

## 📞 Support

For issues or questions:
- Email: proj.breakpoint@gmail.com
- Check the console logs for detailed error messages
- Verify all environment variables are set correctly

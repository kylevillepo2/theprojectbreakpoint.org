import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Set CORS headers to allow requests from your website
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests (browser checking if it can make the request)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;

  try {
    // Get the email from the request body
    const { email } = req.body;

    // Validate the email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Connect to MongoDB
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB connection string not found');
    }

    client = new MongoClient(uri);
    await client.connect();

    // Get the database and collection
    const db = client.db('projectbreakpoint');
    const collection = db.collection('subscribers');

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Create a subscriber object
    const subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Insert the subscriber into the database
    await collection.insertOne(subscriber);

    // Get total subscriber count
    const totalSubscribers = await collection.countDocuments();

    console.log('New subscription stored in database:', subscriber);

    // Return success
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!',
      totalSubscribers
    });

  } catch (error) {
    console.error('Error in subscribe API:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  } finally {
    // Always close the connection
    if (client) {
      await client.close();
    }
  }
} 

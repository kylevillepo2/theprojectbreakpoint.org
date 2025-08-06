import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;
  
  try {
    const { email } = req.body;

    // Basic email validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Connect to MongoDB directly
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB URI not configured');
    }

    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      maxPoolSize: 1,
      minPoolSize: 0,
      maxIdleTimeMS: 30000,
      retryWrites: true,
      w: 'majority'
    });

    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('projectbreakpoint');
    const collection = db.collection('subscribers');

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    const result = await collection.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      active: true
    });

    console.log('New subscription stored in database:', email);

    // Get total subscriber count
    const totalSubscribers = await collection.countDocuments({ active: true });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!',
      totalSubscribers 
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  } finally {
    // Always close the connection
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
} 
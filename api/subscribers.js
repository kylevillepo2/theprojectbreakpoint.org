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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;

  try {
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

    // Get all active subscribers
    const subscribers = await collection.find({ active: true }).toArray();
    const totalSubscribers = subscribers.length;

    res.status(200).json({
      success: true,
      subscribers: subscribers.map(sub => ({
        email: sub.email,
        subscribedAt: sub.subscribedAt
      })),
      totalSubscribers
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers. Please try again.' });
  } finally {
    // Always close the connection
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
} 
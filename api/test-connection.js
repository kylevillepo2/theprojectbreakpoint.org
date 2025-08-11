import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let client;

  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      return res.status(500).json({ 
        error: 'MongoDB connection string not found',
        hasUri: false 
      });
    }

    console.log('Attempting to connect with URI:', uri.substring(0, 50) + '...');

    // Test the connection
    client = new MongoClient(uri);
    await client.connect();

    console.log('Successfully connected to MongoDB!');

    // Try to access the database
    const db = client.db('projectbreakpoint');
    const collection = db.collection('subscribers');
    
    // Try a simple operation
    const count = await collection.countDocuments();

    console.log(`Found ${count} subscribers in database`);

    return res.status(200).json({
      success: true,
      message: 'MongoDB connection successful!',
      subscriberCount: count,
      hasUri: true
    });

  } catch (error) {
    console.error('Connection test error:', error);
    return res.status(500).json({
      error: 'MongoDB connection failed',
      details: error.message,
      hasUri: !!process.env.MONGODB_URI
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

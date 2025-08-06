import clientPromise from '../lib/mongodb';

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

  try {
    console.log('Testing MongoDB connection...');
    
    // Test the connection
    const client = await clientPromise;
    console.log('MongoDB client connected successfully');
    
    // Test database access
    const db = client.db('projectbreakpoint');
    console.log('Database accessed successfully');
    
    // Test collection access
    const collection = db.collection('subscribers');
    console.log('Collection accessed successfully');
    
    // Test a simple query
    const count = await collection.countDocuments();
    console.log('Query executed successfully, count:', count);

    res.status(200).json({ 
      success: true, 
      message: 'MongoDB connection working!',
      subscriberCount: count,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('MongoDB test error:', error);
    res.status(500).json({ 
      error: 'MongoDB connection failed', 
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
} 
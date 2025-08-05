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
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('projectbreakpoint');
    const collection = db.collection('subscribers');

    // Get all active subscribers
    const subscribers = await collection
      .find({ active: true })
      .sort({ subscribedAt: -1 })
      .toArray();

    // Get total count
    const totalCount = await collection.countDocuments({ active: true });

    res.status(200).json({
      subscribers,
      totalCount,
      success: true
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
} 
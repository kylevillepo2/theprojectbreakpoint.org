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

  try {
    const { email } = req.body;

    // Basic email validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Use MongoDB Atlas Data API
    const MONGODB_API_KEY = process.env.MONGODB_API_KEY;
    const MONGODB_CLUSTER_URL = process.env.MONGODB_CLUSTER_URL;
    const MONGODB_DATABASE = 'projectbreakpoint';
    const MONGODB_COLLECTION = 'subscribers';

    if (!MONGODB_API_KEY || !MONGODB_CLUSTER_URL) {
      throw new Error('MongoDB API configuration missing');
    }

    // Check if email already exists
    const findUrl = `${MONGODB_CLUSTER_URL}/data/v1/app/${MONGODB_DATABASE}/endpoint/data/v1/action/findOne`;
    const findResponse = await fetch(findUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': MONGODB_API_KEY,
      },
      body: JSON.stringify({
        dataSource: 'Projectbreakpoint-cluster',
        database: MONGODB_DATABASE,
        collection: MONGODB_COLLECTION,
        filter: { email: email.toLowerCase() }
      })
    });

    const findResult = await findResponse.json();
    
    if (findResult.document) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    const insertUrl = `${MONGODB_CLUSTER_URL}/data/v1/app/${MONGODB_DATABASE}/endpoint/data/v1/action/insertOne`;
    const insertResponse = await fetch(insertUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': MONGODB_API_KEY,
      },
      body: JSON.stringify({
        dataSource: 'Projectbreakpoint-cluster',
        database: MONGODB_DATABASE,
        collection: MONGODB_COLLECTION,
        document: {
          email: email.toLowerCase(),
          subscribedAt: new Date().toISOString(),
          active: true
        }
      })
    });

    const insertResult = await insertResponse.json();
    
    if (!insertResult.insertedId) {
      throw new Error('Failed to insert subscriber');
    }

    console.log('New subscription stored in database:', email);

    // Get total subscriber count
    const countUrl = `${MONGODB_CLUSTER_URL}/data/v1/app/${MONGODB_DATABASE}/endpoint/data/v1/action/count`;
    const countResponse = await fetch(countUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': MONGODB_API_KEY,
      },
      body: JSON.stringify({
        dataSource: 'Projectbreakpoint-cluster',
        database: MONGODB_DATABASE,
        collection: MONGODB_COLLECTION,
        filter: { active: true }
      })
    });

    const countResult = await countResponse.json();
    const totalSubscribers = countResult.count || 0;

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!',
      totalSubscribers 
    });

  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
} 
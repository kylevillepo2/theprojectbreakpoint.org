export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const mongoUri = process.env.MONGODB_URI;
  
  // Don't log the full URI for security, just check if it contains the problematic character
  const hasUnescapedHash = mongoUri && mongoUri.includes('Soccerskills#21');
  const hasEscapedHash = mongoUri && mongoUri.includes('Soccerskills%2321');
  
  res.status(200).json({
    hasMongoUri: !!mongoUri,
    hasUnescapedHash,
    hasEscapedHash,
    uriLength: mongoUri ? mongoUri.length : 0,
    // Show first 50 characters for debugging (without revealing password)
    uriPreview: mongoUri ? mongoUri.substring(0, 50) + '...' : 'Not set'
  });
} 
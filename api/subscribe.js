import fs from 'fs';
import path from 'path';

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

  try {
    // Get the email from the request body
    const { email } = req.body;

    // Validate the email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Create a simple subscriber object
    const subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      id: Date.now().toString()
    };

    // For now, we'll just log it to the console
    // (In production, you'd save to a database)
    console.log('New subscription:', subscriber);

    // Return success
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('Error in subscribe API:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
} 

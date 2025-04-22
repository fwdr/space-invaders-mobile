#!/bin/bash

# Deploy to Vercel script
echo "Starting deployment to Vercel"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null
then
    echo "Please login to Vercel:"
    vercel login
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --confirm

echo "Deployment complete!"
echo "To deploy to production, run: vercel --prod" 
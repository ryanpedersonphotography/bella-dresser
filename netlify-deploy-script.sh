#!/bin/bash

# Netlify Deployment Script for Vite SPA with routing
# This script will:
# 1. Create the necessary redirects configuration
# 2. Build your project
# 3. Deploy to Netlify

# Exit on error
set -e

echo "🚀 Starting Netlify deployment for Vite SPA..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "🔧 Netlify CLI not found. Installing..."
    npm install -g netlify-cli
    echo "✅ Netlify CLI installed successfully!"
else
    echo "✅ Netlify CLI already installed."
fi

# Create public directory if it doesn't exist
if [ ! -d "public" ]; then
    echo "📁 Creating public directory..."
    mkdir public
    echo "✅ Public directory created."
else
    echo "✅ Public directory already exists."
fi

# We're not creating the _redirects file anymore as requested
echo "📝 Skipping _redirects file creation as requested..."

# Optional: Create netlify.toml file (alternative to _redirects)
echo "📝 Creating netlify.toml file as backup..."
cat > netlify.toml << 'EOL'
# Netlify configuration for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build]
  publish = "dist"
  command = "npm run build"
EOL
echo "✅ netlify.toml file created."

# Ensure dependencies are installed
echo "📦 Checking dependencies..."
npm install
echo "✅ Dependencies are installed."

# Build the project
echo "🔨 Building project..."
npm run build
echo "✅ Build completed successfully!"

# Link to the correct Netlify site using the exact site ID
echo "🔄 Linking to the correct Netlify site (bellasdresser.com)..."
echo "⚠️ This will fix the issue with deploying to the wrong site"

# Link directly to the existing site using its ID
echo "✅ Linking to existing belladresser site..."
netlify link --id b3047b1d-50ef-4fc0-89e7-09ac81a68c84

# Verify the site is linked correctly
echo "🔍 Verifying site link..."
netlify status

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --prod

echo "✨ Deployment process completed! Your SPA with routing should now work correctly on Netlify."

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Changed from 'export' to enable API routes for OpenAI integration
  // output: 'export',  // Disabled for AI features
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
}

module.exports = nextConfig


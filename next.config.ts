/** @type {import('next').NextConfig} */
const nextConfig = {
  
  experimental: {
    optimizeCss: true, 
    optimizePackageImports: ['framer-motion', 'lucide-react'], 
  },
  
  images: {
    formats: ['image/avif', 'image/webp'], 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], 
    dangerouslyAllowSVG: true, 
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", 
  },
  

  compress: true, 

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

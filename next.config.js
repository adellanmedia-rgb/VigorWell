/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

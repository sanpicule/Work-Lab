/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.notion.so',
      's3.us-west-2.amazonaws.com',
      'firebase.google.com',
      'd1tlzifd8jdoy4.cloudfront.net',
      'rightcode.co.jp',
      'buddy.works',
      'ingg.dev',
      'www.python.jp',
      'develop.blue',
      'prtimes.jp',
      'd2ms8rpfqc4h24.cloudfront.net',
      'www.memotansu.jp',
      'jwt.io',
      'res.cloudinary.com',
      'a0.awsstatic.com',
      'images.pexels.com',
      'upload.wikimedia.org',
      'cdn.icon-icons.com',
      'www.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig

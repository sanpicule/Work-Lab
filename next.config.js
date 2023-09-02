/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
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
      'a0.awsstatic.com'
    ]
  }
}

module.exports = nextConfig

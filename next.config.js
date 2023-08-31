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
      'ingg.dev'
    ], // 画像を提供するホスト名をここに追加
  },
}

module.exports = nextConfig

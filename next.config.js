/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tmdb.org",
      "themoviedb.org",
      "image.tmdb.org",
      "flagcdn.com",
      "www.gravatar.com",
    ],
  },
};

module.exports = nextConfig;

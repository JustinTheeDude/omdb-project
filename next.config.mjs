/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  }
};

export default nextConfig;

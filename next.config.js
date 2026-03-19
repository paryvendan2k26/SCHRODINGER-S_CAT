/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silence the "missing suspense boundary" warning for dynamic imports
  experimental: {},
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    quietDeps: true,
  },
  images: {
    // GitHub Pages serves static files only, so Next's image optimizer can't run
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.stack.imgur.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [100, 75],
  },
}

module.exports = nextConfig

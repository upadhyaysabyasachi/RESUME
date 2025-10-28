/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  trailingSlash: true,
  // Uncomment the following lines if deploying to a project site (username.github.io/repo-name)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
}

module.exports = nextConfig


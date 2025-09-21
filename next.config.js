const bundleAnalyzer = require('@next/bundle-analyzer');

/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  output: 'export',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',

  // Optional configs:
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // distDir: 'dist',
});

module.exports = nextConfig;

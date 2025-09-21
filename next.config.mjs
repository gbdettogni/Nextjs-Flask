import bundleAnalyzer from '@next/bundle-analyzer';

/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  output: 'export',
});


export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});


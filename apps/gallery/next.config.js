/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@lightmind/ui"],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // GitHub Pages deployment
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/lightmind-ui-framework' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lightmind-ui-framework' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
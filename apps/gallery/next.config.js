/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.EXPORT === 'true'

const nextConfig = {
  transpilePackages: ["@lightmind/ui"],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Only use static export for production builds
  ...(isExport && {
    output: 'export',
    basePath: '/lightmind-ui-framework',
    assetPrefix: '/lightmind-ui-framework',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.EXPORT === 'true'
const isCloudflare = process.env.CLOUDFLARE === 'true'

const nextConfig = {
  transpilePackages: ["@lightmind/ui"],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
    mdxRs: true,
  },
  
  // Development configuration
  ...(!isExport && !isCloudflare && {
    // Hot reload optimization for Docker development
    webpack: (config) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config
    },
  }),

  // Cloudflare Pages configuration
  ...(isCloudflare && {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
      unoptimized: true,
    },
    // Optimize for edge deployment
    compress: false, // Cloudflare handles compression
    poweredByHeader: false,
    generateEtags: false,
  }),

  // GitHub Pages configuration (legacy)
  ...(isExport && !isCloudflare && {
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
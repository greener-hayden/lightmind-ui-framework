/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@lightmind/ui"],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // WSL compatibility
  async rewrites() {
    return []
  },
}

module.exports = nextConfig
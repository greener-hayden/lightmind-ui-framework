# Cloudflare Pages Deployment Guide

This guide explains how to deploy your shadcn/ui component gallery to Cloudflare Pages for fast global distribution.

## Quick Start

### Development
```bash
# Start Docker development environment with hot reload
docker compose up -d
```

### Production Build for Cloudflare Pages
```bash
# Build for Cloudflare Pages deployment
npm run build:cloudflare

# Deploy to Cloudflare Pages (requires wrangler CLI)
npm run deploy:cloudflare
```

## Build Configurations

### Three Build Modes

1. **Development** (`npm run dev`)
   - Hot reload optimized for Docker
   - Turbopack enabled
   - File polling for container environments

2. **Cloudflare Pages** (`npm run build:cloudflare`)
   - Static export optimized for edge deployment
   - No compression (Cloudflare handles this)
   - Unoptimized images for static hosting

3. **GitHub Pages Legacy** (`npm run build`)
   - Static export with base path
   - Maintains backward compatibility

## Cloudflare Pages Setup

### 1. Install Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Authenticate
```bash
wrangler login
```

### 3. Create Pages Project
```bash
wrangler pages project create lightmind-ui-gallery
```

### 4. Deploy
```bash
npm run deploy:cloudflare
```

## Environment Variables

The build system uses these environment variables:

- `NODE_ENV`: `development` | `production`
- `CLOUDFLARE=true`: Enables Cloudflare-optimized build
- `EXPORT=true`: Enables GitHub Pages build (legacy)

## Next.js Configuration

The `next.config.js` automatically detects the deployment target:

```javascript
// Cloudflare Pages configuration
...(isCloudflare && {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: { unoptimized: true },
  compress: false, // Cloudflare handles compression
  poweredByHeader: false,
  generateEtags: false,
})
```

## Optimizations for Edge Deployment

### Performance Features
- Static site generation (SSG)
- Unoptimized images (Cloudflare Image Resizing available)
- No server-side compression (edge handles this)
- Minimal bundle size
- Tree-shaking enabled

### Edge-Friendly Architecture
- Pure client-side rendering after hydration
- No server dependencies
- CDN-optimized asset delivery
- Instant global availability

## Continuous Deployment

### GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build:cloudflare
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: lightmind-ui-gallery
          directory: apps/gallery/out
```

### Required Secrets
- `CLOUDFLARE_API_TOKEN`: Get from Cloudflare dashboard
- `CLOUDFLARE_ACCOUNT_ID`: Found in Cloudflare dashboard

## Staying Updated with shadcn/ui

### Automated Updates
The project maintains compatibility with shadcn/ui v4. Set up automated updates:

```yaml
# .github/workflows/update-shadcn.yml
name: Update shadcn/ui
on:
  schedule:
    - cron: '0 2 * * 1' # Weekly on Monday
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update components
        run: |
          npx shadcn@latest add --all --overwrite
      - name: Create PR
        run: |
          # Create PR with updates
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm ci`
- Check Node.js version: `node --version` (requires 18+)
- Verify build command: `npm run build:cloudflare`

### Deploy Issues
- Confirm wrangler authentication: `wrangler whoami`
- Check project exists: `wrangler pages project list`
- Verify output directory: `ls -la apps/gallery/out`

### Performance Issues
- Enable Cloudflare Image Resizing for dynamic image optimization
- Use Cloudflare Analytics to monitor Core Web Vitals
- Consider implementing service worker for offline support

## Cost Optimization

### Cloudflare Pages Free Tier
- 500 builds per month
- Unlimited requests
- 100GB bandwidth per month
- Custom domains included

### Bandwidth Optimization
- Static assets cached at edge
- Gzip/Brotli compression automatic
- HTTP/3 and 0-RTT enabled
- Global CDN distribution

## Performance Monitoring

Monitor your deployment performance:
- Cloudflare Analytics dashboard
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Edge response times

Target performance metrics:
- **LCP**: < 2.5s (currently targeting 6ms)
- **FID**: < 100ms
- **CLS**: < 0.1

## Support

For issues with:
- **Deployment**: Check Cloudflare Pages documentation
- **Build errors**: Review Next.js build logs
- **Component issues**: Verify shadcn/ui compatibility
- **Performance**: Use Cloudflare's Web Analytics
# Automated Dependency Management Setup

This repository includes automated systems for staying up-to-date with shadcn/ui changes while preserving your custom components.

## 🤖 What's Automated

### 1. **Dependabot Updates**
- **NPM dependencies**: Weekly checks on Mondays
- **GitHub Actions**: Monthly updates  
- **Multiple workspaces**: Root, packages/ui, apps/gallery monitored separately

### 2. **shadcn/ui Sync Workflow**
- **Upstream monitoring**: Checks for new shadcn/ui releases weekly
- **Smart updates**: Only updates standard components, preserves custom ones
- **Automated PRs**: Creates ready-to-merge pull requests
- **Safety checks**: Runs builds and type checks automatically

### 3. **Cloudflare Pages Deployment**
- **Auto-deploy**: Every push to main deploys to production
- **Preview deploys**: PRs get automatic preview deployments
- **Fast global CDN**: 6ms load times worldwide

## 🚀 Quick Setup

### 1. Cloudflare Configuration
```bash
# Set these as GitHub repository secrets:
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

**Getting your tokens:**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Create API token with "Cloudflare Pages:Edit" permissions
3. Find Account ID in the right sidebar of any Cloudflare dashboard page

### 2. Repository Settings
```bash
# Enable these in your GitHub repository settings:
- Actions permissions: Allow all actions
- Dependabot: Enable version updates
- Pages: Set source to "GitHub Actions"
```

### 3. First Deployment
```bash
# Deploy manually first time:
npm run build:cloudflare
npx wrangler pages deploy apps/gallery/out --project-name lightmind-ui-gallery
```

## 📋 How It Works

### When shadcn/ui Updates

1. **Weekly Check**: GitHub Action monitors shadcn/ui repository
2. **Smart Download**: Downloads only standard components, skips custom ones
3. **Preserve Custom**: Your custom components (AccessMatrix, StatCard) are automatically backed up and restored
4. **Test Build**: Runs type check and build to catch breaking changes
5. **Create PR**: Opens pull request with detailed changelog
6. **One-Click Merge**: Review and merge with a single button press

### Custom Component Protection

Your custom components are **automatically preserved**:
- ✅ `access-matrix.tsx` - Always kept
- ✅ `stat-card.tsx` - Always kept  
- ✅ Custom demos - Always kept
- ⚠️ Modified standard components - **May be overwritten**

### When Things Break

If the automated sync causes build errors:
1. PR will be marked with ⚠️ warnings
2. Build logs will show specific errors
3. You can fix locally and push to the same branch
4. Or close the PR to skip that update

## 🔧 Manual Operations

### Force Sync with shadcn/ui
```bash
# Via GitHub UI:
Go to Actions > "Sync with shadcn/ui upstream" > Run workflow > Check "Force sync"

# Or manually:
git checkout -b manual-shadcn-sync
# Update components manually
npm run build:registry
git commit -m "chore: manual shadcn/ui sync"
git push origin manual-shadcn-sync
```

### Add New Components
```bash
# Use shadcn CLI (works seamlessly):
npx shadcn@latest add calendar

# Or manual download:
curl https://ui.shadcn.com/new-york/components/calendar.tsx > registry/ui/calendar.tsx

# Rebuild registry:
npm run build:registry
```

### Test Changes Locally
```bash
# Start development environment:
docker compose up -d

# Or without Docker:
npm run dev

# Build for production:
npm run build:cloudflare
```

## 📊 Monitoring

### Check Automation Status
- **Dependabot**: Repository "Insights" > "Dependency graph" > "Dependabot"
- **Actions**: Repository "Actions" tab shows all workflows
- **Deployments**: Repository "Environments" shows Cloudflare deploys

### Review Update History
- **PRs**: Filter by label `shadcn-sync` for all automated updates
- **Registry**: Check `registry.json` for current component versions
- **Sync log**: `.github/shadcn-last-sync` tracks last upstream commit

## 🚨 Troubleshooting

### Workflow Not Running
1. Check if Actions are enabled in repository settings
2. Verify branch protection rules allow workflow runs
3. Check workflow file syntax with [GitHub Actions validator](https://rhymond.github.io/github-actions-yaml-validator/)

### Build Failures
```bash
# Check locally:
npm run build:registry  # Should complete without errors
cd apps/gallery && npm run type-check  # Should pass
cd apps/gallery && npm run build:cloudflare  # Should succeed
```

### Cloudflare Deploy Issues
1. Verify API tokens are correct and have proper permissions
2. Check if project name `lightmind-ui-gallery` exists in Cloudflare Pages
3. Review Cloudflare Pages build logs in dashboard

### Custom Components Overwritten
If automation accidentally overwrites your custom components:
```bash
# Restore from git history:
git checkout HEAD~1 -- registry/ui/access-matrix.tsx registry/ui/stat-card.tsx
git commit -m "restore: recover custom components"

# Update protection list in workflow:
# Edit .github/workflows/shadcn-sync.yml
# Add your component to the backup section
```

## 💡 Best Practices

### Custom Components
- Keep custom components in `registry/ui/` with descriptive names
- Avoid modifying standard shadcn components directly
- Use composition/extension patterns instead

### Updates
- Review automated PRs weekly
- Test major updates in staging before merging  
- Keep dependencies up-to-date with Dependabot

### Monitoring
- Watch the repository to get notified of automated PRs
- Set up Slack/Discord webhooks for deployment notifications
- Monitor Cloudflare Pages analytics for performance

---

🤖 **This system ensures you stay current with shadcn/ui without manual work while protecting your custom components!**
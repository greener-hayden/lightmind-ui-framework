# LightMind UI Framework

A modern, ultra-lean UI framework built on [shadcn/ui](https://ui.shadcn.com) foundations with **zero-thought developer experience** and **dynamic CDN distribution**.

## ✨ Features

- **🎨 Auto-Discovery**: Just add `.tsx` files, everything updates automatically
- **📋 CDN Ready**: Import directly from GitHub Pages, no build step needed
- **🔍 Dynamic Gallery**: Auto-generates from your component files
- **🧪 Cloudflare Workers**: Perfect for 300-line full-stack apps
- **📱 Clean Development**: Add component → test → push → done
- **⚡ Zero Configuration**: No build tools, configs, or complex setups
- **🎯 Production Ready**: Optimized for edge delivery and performance

## 🚀 Quick Start

### Option 1: CDN Import (Recommended)
```javascript
// Just import and use - no setup needed
import { Button, Card, Input } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/index.js';
```

### Option 2: Development
```bash
git clone <repository-url>
cd lightmind-ui-framework
npm install
npm run dev  # Auto-discovers components + starts gallery
```

### Option 3: Cloudflare Workers
```javascript
// Full-stack app in ~300 lines
import { Button, Card, Input } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/index.js';

export default {
  async fetch(request) {
    // Your backend logic here
    
    // Frontend with components
    return new Response(html`
      <div>
        ${Button({ onclick: 'handleClick()' }, 'Click me')}
        ${Card({ title: 'Data' }, 'Card content')}
      </div>
    `, { headers: { 'Content-Type': 'text/html' } });
  }
};
```

## 📦 Architecture

**Ultra-lean monorepo** with copy-paste philosophy:

```
lightmind-ui-framework/
├── packages/ui/src/components/    # Add .tsx files here
├── apps/gallery/                  # Auto-updating gallery
├── build.js                       # Dynamic CDN build
├── scripts/generate-registry.js   # Auto-discovery
└── dist/                          # CDN distribution (auto-generated)
```

## 🛠️ Developer Workflow

**Add Component:**
```bash
# Just create a new file
touch packages/ui/src/components/my-component.tsx
```

**Test Locally:**
```bash
npm run dev  # Gallery auto-updates with your component
```

**Deploy:**
```bash
git push  # GitHub Actions automatically builds and deploys CDN
```

**That's it!** Your component is now available at:
- `https://haydengreener.github.io/lightmind-ui-framework/dist/index.js`

## 🎨 Available Components

**Auto-discovered components** (16 total):
- **Form**: Button, Input, Checkbox, Label, RadioGroup, Select, Textarea, Switch
- **Display**: Alert, Badge, Card, Table, Tooltip  
- **Navigation**: DropdownMenu, Popover
- **Feedback**: Dialog

## 📖 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Auto-discover + start gallery |
| `npm run build:cdn` | Generate CDN distribution |
| `npm run gallery` | Start gallery only |
| `npm run build` | Build gallery for deployment |

## 🌐 CDN Usage

### Basic Import
```javascript
import { Button, Card, Input } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/index.js';
```

### Individual Components
```javascript
import { Button } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/components/button.js';
```

### With React
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://cdn.tailwindcss.com"></script>

<script type="module">
  import { Button, Card } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/index.js';
  
  const { createElement: h } = React;
  
  function App() {
    return h('div', null, [
      h(Button, { onClick: () => alert('Hello!') }, 'Click me'),
      h(Card, { className: 'p-4' }, 'Card content')
    ]);
  }
  
  ReactDOM.render(h(App), document.getElementById('root'));
</script>
```

## 🎯 Key Benefits

- **Zero setup friction** - Just import and use
- **Auto-updating gallery** - Add files, gallery updates
- **Perfect for edge computing** - Cloudflare Workers ready
- **Clean developer experience** - No build tools to think about
- **Production optimized** - Tree-shakeable, performant
- **Backward compatible** - Additive-only changes

## 🤝 Contributing

1. **Add component** → Create `.tsx` file in `packages/ui/src/components/`
2. **Test locally** → `npm run dev`
3. **Push changes** → Automatic CDN deployment
4. **Done!** → Component available worldwide

## 📄 License

MIT License - Built with ❤️ for clean, simple development.

---

**Perfect for building clean, efficient web applications with minimal overhead.**
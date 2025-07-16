#!/usr/bin/env node

/**
 * Dynamic LightMind UI Build System
 * Auto-discovers components and generates clean CDN distribution
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const UI_DIR = join(__dirname, 'packages/ui/src');

// Ensure dist directory exists
if (!existsSync(DIST_DIR)) {
  mkdirSync(DIST_DIR, { recursive: true });
}

console.log('🚀 Building LightMind UI dynamically...');

// Auto-discover all components
const componentsDir = join(UI_DIR, 'components');
const componentFiles = readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'))
  .sort();

console.log(`📦 Found ${componentFiles.length} components:`, componentFiles.map(f => f.replace('.tsx', '')).join(', '));

// Create components directory in dist
const distComponentsDir = join(DIST_DIR, 'components');
if (!existsSync(distComponentsDir)) {
  mkdirSync(distComponentsDir, { recursive: true });
}

// Process each component automatically
componentFiles.forEach(file => {
  const componentPath = join(componentsDir, file);
  const content = readFileSync(componentPath, 'utf8');
  
  // Simple transformation to ES modules
  const esmComponent = content
    .replace(/from "\.\.\/lib\/utils"/g, 'from "../lib/utils.js"')
    .replace(/\.tsx?"/g, '.js"');
  
  const outputFile = file.replace('.tsx', '.js');
  writeFileSync(join(distComponentsDir, outputFile), esmComponent);
});

// Copy utils
const libDir = join(DIST_DIR, 'lib');
if (!existsSync(libDir)) {
  mkdirSync(libDir, { recursive: true });
}

const utilsPath = join(UI_DIR, 'lib/utils.ts');
const utilsContent = readFileSync(utilsPath, 'utf8');
writeFileSync(join(libDir, 'utils.js'), utilsContent);

// Generate dynamic index.js by reading the actual index.ts
const indexPath = join(UI_DIR, 'index.ts');
const indexContent = readFileSync(indexPath, 'utf8');

// Transform to ES modules
const esmIndex = indexContent
  .replace(/from "\.\/lib\/utils"/g, 'from "./lib/utils.js"')
  .replace(/from "\.\/components\/([^"]+)"/g, 'from "./components/$1.js"');

writeFileSync(join(DIST_DIR, 'index.js'), esmIndex);

// Generate Cloudflare Workers example
const workerExample = `// Cloudflare Workers Example - Deploy this directly!
// Full-stack app in ~300 lines using LightMind UI

import { Button, Card, Input } from 'https://haydengreener.github.io/lightmind-ui-framework/cdn/index.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // API endpoint
    if (url.pathname === '/api/data') {
      return Response.json({ 
        message: 'Hello from edge!',
        timestamp: new Date().toISOString()
      });
    }
    
    // Frontend with components
    const html = \`<!DOCTYPE html>
<html>
<head>
  <title>My Clean App</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import { Button, Card, Input } from 'https://haydengreener.github.io/lightmind-ui-framework/dist/index.js';
    
    const { createElement: h } = React;
    
    function App() {
      const [data, setData] = React.useState(null);
      
      const fetchData = async () => {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      };
      
      return h('div', { className: 'p-8 max-w-md mx-auto space-y-4' }, [
        h('h1', { className: 'text-2xl font-bold' }, 'Clean Full-Stack App'),
        h(Input, { 
          key: 'input', 
          placeholder: 'Enter something...',
          className: 'w-full'
        }),
        h(Button, { 
          key: 'btn', 
          onClick: fetchData,
          className: 'w-full'
        }, 'Call API'),
        data && h(Card, { 
          key: 'card', 
          className: 'p-4' 
        }, \`Response: \${data.message}\`)
      ]);
    }
    
    ReactDOM.render(h(App), document.getElementById('root'));
  </script>
</body>
</html>\`;
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};`;

writeFileSync(join(DIST_DIR, 'worker-example.js'), workerExample);

// Create simple demo
const demoHtml = `<!DOCTYPE html>
<html>
<head>
  <title>LightMind UI - CDN Demo</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import { Button, Card, Input } from './index.js';
    
    const { createElement: h } = React;
    
    function Demo() {
      return h('div', { className: 'p-8 max-w-md mx-auto space-y-4' }, [
        h('h1', { className: 'text-2xl font-bold' }, 'LightMind UI Demo'),
        h(Input, { key: 'input', placeholder: 'Try typing...' }),
        h(Button, { key: 'btn', onClick: () => alert('CDN works!') }, 'Test Button'),
        h(Card, { key: 'card', className: 'p-4' }, 'Card from CDN')
      ]);
    }
    
    ReactDOM.render(h(Demo), document.getElementById('root'));
  </script>
</body>
</html>`;

writeFileSync(join(DIST_DIR, 'demo.html'), demoHtml);

console.log('✅ Dynamic build complete!');
console.log('📦 CDN ready at: https://haydengreener.github.io/lightmind-ui-framework/dist/index.js');
console.log('🔗 Cloudflare Workers example: ./dist/worker-example.js');
console.log('🌐 Demo: ./dist/demo.html');
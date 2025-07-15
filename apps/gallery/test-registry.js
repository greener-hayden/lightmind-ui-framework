// Quick test to verify component registry
const { getAllCategories, getComponentStats, searchComponents } = require('./src/lib/component-registry.ts');

console.log('=== Component Registry Test ===');

try {
  // Test categories
  console.log('Categories:');
  const categories = getAllCategories();
  categories.forEach(cat => {
    console.log(`  - ${cat.name}: ${cat.componentCount} components`);
  });

  // Test stats
  console.log('\nStats:');
  const stats = getComponentStats();
  console.log(`  Total components: ${stats.totalComponents}`);
  console.log(`  Simple: ${stats.complexityStats.simple}`);
  console.log(`  Medium: ${stats.complexityStats.medium}`);
  console.log(`  Complex: ${stats.complexityStats.complex}`);

  // Test search
  console.log('\nSearch test ("table"):');
  const searchResults = searchComponents('table');
  searchResults.forEach(comp => {
    console.log(`  - ${comp.name} (${comp.complexity})`);
  });

  console.log('\n✅ Component registry working correctly!');
} catch (error) {
  console.error('❌ Error:', error.message);
}
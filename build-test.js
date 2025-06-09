#!/usr/bin/env node

// Simple build test script
console.log('🔧 Testing build process...');

const { execSync } = require('child_process');

try {
  console.log('📦 Running TypeScript compilation...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript compilation successful');

  console.log('🏗️ Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('✅ Vite build successful');

  console.log('🎉 Build test completed successfully!');
} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}

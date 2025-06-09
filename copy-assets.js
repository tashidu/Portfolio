import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true });
}

// Copy my.jpg from public to dist
const sourcePath = join('public', 'my.jpg');
const destPath = join('dist', 'my.jpg');

if (existsSync(sourcePath)) {
  copyFileSync(sourcePath, destPath);
  console.log('✅ Successfully copied my.jpg to dist folder');
} else {
  console.error('❌ my.jpg not found in public folder');
  process.exit(1);
}

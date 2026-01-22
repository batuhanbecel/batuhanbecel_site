const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const INPUT_DIR = path.join(__dirname, '../public/portfolio-images');

console.log('👀 Watching for new images in /public/portfolio-images...');
console.log('🔄 Any new images will be automatically optimized to WebP');
console.log('⏹️  Press Ctrl+C to stop watching\n');

// Initial optimization
console.log('🚀 Running initial optimization...');
exec('node scripts/optimize-images.js', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Initial optimization failed:', error);
    return;
  }
  console.log(stdout);
  console.log('✅ Initial optimization complete!\n');
});

// Watch for new files
fs.watch(INPUT_DIR, (eventType, filename) => {
  if (eventType === 'rename' && filename) {
    const filePath = path.join(INPUT_DIR, filename);
    const ext = path.extname(filename).toLowerCase();
    
    // Check if it's a supported image file (but not WebP)
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];
    
    if (supportedFormats.includes(ext) && ext !== '.webp' && fs.existsSync(filePath)) {
      console.log(`📸 New image detected: ${filename}`);
      console.log('🔄 Converting to WebP...');
      
      // Use the optimizeImage function directly
      const sharp = require('sharp');
      
      (async () => {
        try {
          const image = sharp(filePath);
          const metadata = await image.metadata();
          
          // Get original size
          const { width, height } = metadata;
          
          // Calculate new dimensions (max 1920px for web)
          let newWidth = width;
          let newHeight = height;
          const maxSize = 1920;
          
          if (width > maxSize || height > maxSize) {
            if (width > height) {
              newWidth = maxSize;
              newHeight = Math.round((height / width) * maxSize);
            } else {
              newHeight = maxSize;
              newWidth = Math.round((width / height) * maxSize);
            }
          }
          
          // Generate WebP output path
          const webpPath = filePath.replace(/\.[^/.]+$/, '.webp');
          
          // Process image
          await image
            .resize(newWidth, newHeight, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({
              quality: 80,
              effort: 6
            })
            .toFile(webpPath);
          
          const originalSize = fs.statSync(filePath).size;
          const optimizedSize = fs.statSync(webpPath).size;
          const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
          
          // Delete original file after successful conversion
          fs.unlinkSync(filePath);
          
          console.log(`✅ ${filename} → ${path.basename(webpPath)}`);
          console.log(`   ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% smaller)`);
          console.log(`   🗑️ Deleted original file`);
          console.log('✅ Conversion complete!\n');
          
        } catch (error) {
          console.error(`❌ Error processing ${filename}:`, error.message);
        }
      })();
    }
  }
});

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log('🎯 Ready to watch for new images...');

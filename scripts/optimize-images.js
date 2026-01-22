const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/portfolio-images');
const FAVORITES_DIR = path.join(INPUT_DIR, 'favorites');

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];

async function optimizeImage(inputPath) {
  try {
    const image = sharp(inputPath);
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
    const webpPath = inputPath.replace(/\.[^/.]+$/, '.webp');
    
    // Process image
    await image
      .resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: 80,
        effort: 6 // Higher compression effort
      })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    // Delete original file after successful conversion
    fs.unlinkSync(inputPath);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(webpPath)}`);
    console.log(`   ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% smaller)`);
    console.log(`   🗑️ Deleted original file`);
    
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processDirectory(directory, dirName) {
  console.log(`\n🚀 Optimizing ${dirName}...\n`);
  
  const files = fs.readdirSync(directory);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_FORMATS.includes(ext) && ext !== '.webp';
  });
  
  if (imageFiles.length === 0) {
    console.log(`No images to optimize in ${dirName}.`);
    return { originalSize: 0, optimizedSize: 0 };
  }
  
  console.log(`Found ${imageFiles.length} images to optimize in ${dirName}\n`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(directory, file);
    
    const originalSize = fs.statSync(inputPath).size;
    totalOriginalSize += originalSize;
    
    await optimizeImage(inputPath);
    
    // Get the new WebP file size
    const webpPath = inputPath.replace(/\.[^/.]+$/, '.webp');
    if (fs.existsSync(webpPath)) {
      const optimizedSize = fs.statSync(webpPath).size;
      totalOptimizedSize += optimizedSize;
    }
  }
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log(`\n📊 ${dirName} Summary:`);
  console.log(`   Total original: ${formatBytes(totalOriginalSize)}`);
  console.log(`   Total optimized: ${formatBytes(totalOptimizedSize)}`);
  console.log(`   Total savings: ${totalSavings}%`);
  
  return { originalSize: totalOriginalSize, optimizedSize: totalOptimizedSize };
}

async function processAllDirectories() {
  console.log('🎨 Starting image optimization...\n');
  
  const mainResults = await processDirectory(INPUT_DIR, 'main folder');
  const favoritesResults = await processDirectory(FAVORITES_DIR, 'favorites folder');
  
  const totalOriginal = mainResults.originalSize + favoritesResults.originalSize;
  const totalOptimized = mainResults.optimizedSize + favoritesResults.optimizedSize;
  const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
  
  console.log('\n🎉 FINAL SUMMARY:');
  console.log(`   Total original: ${formatBytes(totalOriginal)}`);
  console.log(`   Total optimized: ${formatBytes(totalOptimized)}`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n✨ All images converted to WebP and originals deleted`);
}

// Run the optimization
processAllDirectories().catch(console.error);

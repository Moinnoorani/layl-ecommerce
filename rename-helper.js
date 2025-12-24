// Manual image rename script
// Run this to rename all Gemini generated images to proper product names

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public', 'products');

// List all Gemini generated images
const files = fs.readdirSync(productsDir)
    .filter(f => f.startsWith('Gemini_Generated_Image_'))
    .sort();

console.log('Found ' + files.length + ' images to rename:\n');

// Product mapping - UPDATE THESE based on which image is which product
// View each image and update the mapping below
const productMapping = {
    // You'll need to check each image and update this mapping
    // Format: 'Gemini_Generated_Image_xxx.png': 'product-name.png'

    // Example - update these based on actual images:
    // 'Gemini_Generated_Image_2we50m2we50m2we5.png': 'salicylic-cleanser.png',
    // 'Gemini_Generated_Image_5yav315yav315yav.png': 'gentle-cleanser.png',
    // etc...
};

console.log('📋 List of images:');
files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
});

console.log('\n\n⚠️  INSTRUCTIONS:');
console.log('1. Open public/products folder in Windows Explorer');
console.log('2. Look at each image');
console.log('3. Manually rename each file based on product content:');
console.log('\n   REQUIRED FILENAMES:');
console.log('   - salicylic-cleanser.png');
console.log('   - gentle-cleanser.png');
console.log('   - niacinamide-toner.png');
console.log('   - niacinamide-serum.png');
console.log('   - azelaic-acid.png');
console.log('   - ceramide-cream.png');
console.log('   - squalane.png');
console.log('   - mineral-spf-tinted.png');
console.log('   - ultra-light-spf.png');
console.log('   - retinol.png');
console.log('   - vitamin-c.png');
console.log('   - glycolic-body-lotion.png');
console.log('   - body-cream.png');
console.log('\n4. After renaming, run: node update-all-images.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixImages() {
    console.log('🔧 Fixing product images...');

    // Update Hyaluronic Acid
    await prisma.product.update({
        where: { slug: 'hyaluronic-acid-2-b5' },
        data: {
            images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'],
            thumbnailUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
        },
    });

    // Update Salicylic Acid
    await prisma.product.update({
        where: { slug: 'salicylic-acid-2' },
        data: {
            images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400'],
            thumbnailUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
        },
    });

    // Update Sunscreen
    await prisma.product.update({
        where: { slug: 'spf-50-sunscreen' },
        data: {
            images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400'],
            thumbnailUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        },
    });

    console.log('✅ Images fixed!');
    await prisma.$disconnect();
}

fixImages()
    .catch(console.error)
    .finally(() => process.exit());

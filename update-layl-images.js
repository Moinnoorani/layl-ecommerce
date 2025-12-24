const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateLAYLImages() {
    console.log('🎨 Updating to LAYL branded images...');

    await prisma.product.update({
        where: { slug: 'hyaluronic-acid-2-b5' },
        data: {
            images: ['/products/hyaluronic-acid.png'],
            thumbnailUrl: '/products/hyaluronic-acid.png',
        },
    });

    await prisma.product.update({
        where: { slug: 'salicylic-acid-2' },
        data: {
            images: ['/products/salicylic-acid.png'],
            thumbnailUrl: '/products/salicylic-acid.png',
        },
    });

    console.log('✅ LAYL branded images updated!');
    await prisma.$disconnect();
}

updateLAYLImages()
    .catch(console.error)
    .finally(() => process.exit());

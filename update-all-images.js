const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateAllImages() {
    console.log('🎨 Updating all product images to LAYL branded versions...');

    const imageUpdates = [
        // Cleanser & Toner
        { slug: 'salicylic-acid-cleanser', image: '/products/salicylic-cleanser.png' },
        { slug: 'gentle-cream-cleanser', image: '/products/gentle-cleanser.png' },
        { slug: 'niacinamide-toner', image: '/products/niacinamide-toner.png' },

        // Acne & Exfoliation
        { slug: 'salicylic-acid-2', image: '/products/salicylic-acid.png' },
        { slug: 'niacinamide-10-zinc-1', image: '/products/niacinamide-serum.png' },
        { slug: 'azelaic-acid-10', image: '/products/azelaic-acid.png' },

        // Hydration & Barrier
        { slug: 'hyaluronic-acid-2-b5', image: '/products/hyaluronic-acid.png' },
        { slug: 'ceramide-barrier-cream', image: '/products/ceramide-cream.png' },
        { slug: 'squalane-100', image: '/products/squalane.png' },

        // Sunscreen
        { slug: 'spf-50-sunscreen', image: '/products/spf-50-sunscreen.png' },
        { slug: 'mineral-spf-30-tinted', image: '/products/mineral-spf-tinted.png' },
        { slug: 'ultra-light-spf-50', image: '/products/ultra-light-spf.png' },

        // Anti-Aging
        { slug: 'retinol-05-squalane', image: '/products/retinol.png' },
        { slug: 'vitamin-c-23-ha', image: '/products/vitamin-c.png' },

        // Body Care
        { slug: 'glycolic-body-lotion', image: '/products/glycolic-body-lotion.png' },
        { slug: 'rich-body-cream', image: '/products/body-cream.png' },
    ];

    for (const update of imageUpdates) {
        try {
            await prisma.product.update({
                where: { slug: update.slug },
                data: {
                    images: [update.image],
                    thumbnailUrl: update.image,
                },
            });
            console.log(`✅ Updated: ${update.slug}`);
        } catch (error) {
            console.log(`⚠️  Product not found: ${update.slug}`);
        }
    }

    console.log('🎉 All LAYL branded images updated!');
    await prisma.$disconnect();
}

updateAllImages()
    .catch(console.error)
    .finally(() => process.exit());

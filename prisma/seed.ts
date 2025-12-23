import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@layl.in' },
        update: {},
        create: {
            email: 'admin@layl.in',
            name: 'LAYL Admin',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });
    console.log('✅ Admin user created:', admin.email);

    // Create categories
    const categories = [
        {
            name: 'Cleanser & Toner',
            slug: 'cleanser',
            description: 'Gentle cleansers and pH-balancing toners',
            accentColor: '#8B9A8B', // Muted Sage
        },
        {
            name: 'Acne & Exfoliation',
            slug: 'acne',
            description: 'Targeted treatments for acne and chemical exfoliation',
            accentColor: '#A67C7C', // Muted Clay Red
        },
        {
            name: 'Hydration & Barrier',
            slug: 'hydration',
            description: 'Moisturizers and barrier repair formulations',
            accentColor: '#7B8FA3', // Dusty Blue
        },
        {
            name: 'Sunscreen',
            slug: 'sunscreen',
            description: 'Broad-spectrum UV protection',
            accentColor: '#C9B896', // Warm Sand Yellow
        },
        {
            name: 'Anti-Aging',
            slug: 'antiaging',
            description: 'Retinoids and peptide formulations',
            accentColor: '#9B8B9B', // Muted Mauve
        },
        {
            name: 'Body Care',
            slug: 'bodycare',
            description: 'Body treatments and moisturizers',
            accentColor: '#8B8B8B', // Stone Grey
        },
    ];

    for (const category of categories) {
        await prisma.category.upsert({
            where: { slug: category.slug },
            update: {},
            create: category,
        });
    }
    console.log('✅ Categories created');

    // Get category IDs
    const hydrationCat = await prisma.category.findUnique({ where: { slug: 'hydration' } });
    const acneCat = await prisma.category.findUnique({ where: { slug: 'acne' } });
    const sunscreenCat = await prisma.category.findUnique({ where: { slug: 'sunscreen' } });

    // Create sample products
    const products = [
        {
            name: 'Hyaluronic Acid 2% + B5',
            slug: 'hyaluronic-acid-2-b5',
            description: 'Multi-molecular weight hyaluronic acid with vitamin B5 for deep hydration and skin barrier support.',
            keyIngredients: ['Hyaluronic Acid', 'Panthenol (Vitamin B5)'],
            concentration: '2%',
            skinType: ['All Skin Types', 'Dry', 'Dehydrated'],
            whatItDoes: 'Provides multi-layer hydration and supports skin barrier function',
            howToUse: 'Apply to damp skin morning and evening before moisturizer',
            fullIngredients: 'Aqua, Sodium Hyaluronate, Panthenol, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Phenoxyethanol, Ethylhexylglycerin',
            price: 499,
            mrp: 699,
            size: '30ml',
            stock: 100,
            categoryId: hydrationCat!.id,
            images: ['/products/hyaluronic-acid.png'],
            thumbnailUrl: '/products/hyaluronic-acid.png',
            featured: true,
            isActive: true,
        },
        {
            name: 'Salicylic Acid 2%',
            slug: 'salicylic-acid-2',
            description: 'Beta hydroxy acid (BHA) for treating acne, unclogging pores, and gentle exfoliation.',
            keyIngredients: ['Salicylic Acid'],
            concentration: '2%',
            skinType: ['Oily', 'Acne-Prone', 'Combination'],
            whatItDoes: 'Exfoliates inside pores, reduces acne and blackheads',
            howToUse: 'Apply to clean skin in the evening. Start 2-3 times per week, increase as tolerated',
            fullIngredients: 'Aqua, Salicylic Acid, Hamamelis Virginiana Water, Glycerin, Pentylene Glycol, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin',
            price: 549,
            mrp: 749,
            size: '30ml',
            stock: 100,
            categoryId: acneCat!.id,
            images: ['/products/salicylic-acid.png'],
            thumbnailUrl: '/products/salicylic-acid.png',
            featured: true,
            isActive: true,
        },
        {
            name: 'SPF 50 PA++++ Sunscreen',
            slug: 'spf-50-sunscreen',
            description: 'Broad-spectrum mineral and chemical hybrid sunscreen with high UVA and UVB protection.',
            keyIngredients: ['Zinc Oxide', 'Tinosorb S', 'Uvinul A Plus'],
            concentration: 'SPF 50 PA++++',
            skinType: ['All Skin Types'],
            whatItDoes: 'Provides broad-spectrum protection against UVA and UVB rays',
            howToUse: 'Apply generously as the last step of skincare. Reapply every 2 hours',
            fullIngredients: 'Aqua, Zinc Oxide, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Bemotrizinol, Glycerin, C12-15 Alkyl Benzoate, Phenoxyethanol',
            price: 599,
            mrp: 799,
            size: '50ml',
            stock: 100,
            categoryId: sunscreenCat!.id,
            images: ['/products/sunscreen.png'],
            thumbnailUrl: '/products/sunscreen.png',
            featured: true,
            isActive: true,
        },
    ];

    for (const product of products) {
        await prisma.product.upsert({
            where: { slug: product.slug },
            update: {},
            create: product,
        });
    }
    console.log('✅ Products created');

    // Create a sample coupon
    await prisma.coupon.upsert({
        where: { code: 'WELCOME10' },
        update: {},
        create: {
            code: 'WELCOME10',
            description: 'Welcome discount - 10% off',
            discountType: 'PERCENTAGE',
            value: 10,
            minPurchase: 500,
            maxDiscount: 200,
            usageLimit: 1000,
            validFrom: new Date(),
            validUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
            isActive: true,
        },
    });
    console.log('✅ Coupon created');

    console.log('🎉 Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

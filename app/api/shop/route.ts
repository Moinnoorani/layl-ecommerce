import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const search = searchParams.get('search');

        // Build filter conditions
        const where: any = {
            isActive: true,
        };

        if (category) {
            const categoryData = await prisma.category.findUnique({
                where: { slug: category },
            });
            if (categoryData) {
                where.categoryId = categoryData.id;
            }
        }

        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
            ];
        }

        // Fetch products
        const products = await prisma.product.findMany({
            where,
            include: {
                category: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Fetch all categories for filter
        const categories = await prisma.category.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json({ products, categories });
    } catch (error) {
        console.error('Error fetching shop data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

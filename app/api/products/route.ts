import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');
        const search = searchParams.get('search');
        const featured = searchParams.get('featured');

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

        if (featured === 'true') {
            where.featured = true;
        }

        const products = await prisma.product.findMany({
            where,
            include: {
                category: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

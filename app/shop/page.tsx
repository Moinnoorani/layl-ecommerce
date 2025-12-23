'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    mrp: number;
    size: string;
    stock: number;
    concentration: string | null;
    thumbnailUrl: string | null;
    images: string[];
    category: {
        id: string;
        name: string;
        accentColor: string;
    };
}

interface Category {
    id: string;
    name: string;
    slug: string;
    accentColor: string;
}

export default function ShopPage() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const { theme } = useTheme();

    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const params = new URLSearchParams();
                if (category) params.set('category', category);
                if (search) params.set('search', search);

                const response = await fetch(`/api/shop?${params.toString()}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data.products);
                setCategories(data.categories);
                setError(null);
            } catch (err) {
                setError('Failed to load products. Please try again.');
                console.error('Error loading shop data:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [category, search]);

    const getButtonStyle = (isActive: boolean) => {
        if (isActive) {
            return {
                backgroundColor: theme === 'dark' ? '#FAFAF8' : '#1A1A1A',
                color: theme === 'dark' ? '#1A1A1A' : '#FAFAF8',
                borderColor: theme === 'dark' ? '#FAFAF8' : '#1A1A1A',
            };
        }
        return {};
    };

    return (
        <>
            <Header />
            <main className="container-custom py-12 mt-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold mb-4">Shop All Products</h1>
                    <p className="text-text-secondary">
                        Science-backed formulations with transparent ingredient lists
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 pb-8 border-b border-border">
                    <h3 className="text-sm font-medium mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            href="/shop"
                            className="px-4 py-2 border rounded-md transition-colors border-border hover:border-text-primary"
                            style={getButtonStyle(!category)}
                        >
                            All Products
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/shop?category=${cat.slug}`}
                                className="px-4 py-2 border rounded-md transition-colors border-border hover:border-text-primary"
                                style={getButtonStyle(category === cat.slug)}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-16">
                        <p className="text-text-secondary">Loading products...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-16">
                        <p className="text-error">{error}</p>
                    </div>
                )}

                {/* Product Grid */}
                {!loading && !error && products.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-text-secondary">No products found</p>
                    </div>
                )}

                {!loading && !error && products.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.slug}`}
                                className="group"
                            >
                                <div
                                    className="border border-border mb-4 aspect-square flex items-center justify-center overflow-hidden group-hover:border-text-primary transition-colors"
                                    style={{ backgroundColor: theme === 'dark' ? '#2A2A2A' : '#FFFFFF' }}
                                >
                                    {product.thumbnailUrl || product.images[0] ? (
                                        <img
                                            src={product.thumbnailUrl || product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-container flex items-center justify-center text-text-muted text-sm text-center p-4">
                                            {product.name}
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="border-l-2 pl-3"
                                    style={{ borderColor: product.category.accentColor }}
                                >
                                    <h3 className="font-medium mb-1 group-hover:opacity-70 transition-opacity">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-text-secondary mb-2">
                                        {product.category.name}
                                    </p>
                                    {product.concentration && (
                                        <p className="text-sm text-text-muted mb-2">
                                            {product.concentration}
                                        </p>
                                    )}
                                    <p className="text-sm text-text-muted mb-3">{product.size}</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-semibold">
                                                ₹{product.price}
                                            </span>
                                            {product.mrp > product.price && (
                                                <span className="text-sm text-text-muted line-through ml-2">
                                                    ₹{product.mrp}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {product.stock === 0 && (
                                        <p className="text-sm text-error mt-2">Out of Stock</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

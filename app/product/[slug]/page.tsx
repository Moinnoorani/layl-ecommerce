import { prisma } from '@/lib/prisma';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: { slug },
        include: {
            category: true,
            reviews: {
                include: {
                    user: {
                        select: {
                            name: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    });

    if (!product) {
        notFound();
    }

    const averageRating =
        product.reviews.length > 0
            ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
            product.reviews.length
            : 0;

    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Product Images */}
                    <div>
                        <div className="bg-white border border-border aspect-square flex items-center justify-center mb-4">
                            {product.thumbnailUrl || product.images[0] ? (
                                <img
                                    src={product.thumbnailUrl || product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-container flex items-center justify-center text-text-muted">
                                    {product.name}
                                </div>
                            )}
                        </div>
                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.slice(1, 5).map((image, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-border aspect-square"
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 2}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Product Info */}
                    <div>
                        <div
                            className="border-l-4 pl-4 mb-6"
                            style={{ borderColor: product.category.accentColor }}
                        >
                            <p className="text-sm text-text-secondary mb-2">
                                {product.category.name}
                            </p>
                            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                            {product.concentration && (
                                <p className="text-lg text-text-secondary">
                                    {product.concentration}
                                </p>
                            )}
                        </div>

                        {/* Key Ingredients */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Key Ingredients</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.keyIngredients.map((ingredient, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-container text-sm"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Skin Type */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Suitable For</h3>
                            <p className="text-sm text-text-secondary">
                                {product.skinType.join(', ')}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mb-6 pb-6 border-b border-border">
                            <div className="flex items-baseline space-x-3">
                                <span className="text-3xl font-semibold">₹{product.price}</span>
                                {product.mrp > product.price && (
                                    <span className="text-xl text-text-muted line-through">
                                        ₹{product.mrp}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-text-muted mt-1">
                                MRP ₹{product.mrp} | {product.size}
                            </p>
                        </div>

                        {/* Add to Cart */}
                        <div className="mb-8">
                            {product.stock > 0 ? (
                                <button className="w-full bg-text-primary text-background py-4 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
                                    <ShoppingCart size={20} />
                                    <span>Add to Cart</span>
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="w-full bg-container text-text-muted py-4 cursor-not-allowed"
                                >
                                    Out of Stock
                                </button>
                            )}
                            {product.stock > 0 && product.stock < 10 && (
                                <p className="text-sm text-warning mt-2">
                                    Only {product.stock} left in stock
                                </p>
                            )}
                        </div>

                        {/* What it Does */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">What It Does</h3>
                            <p className="text-sm text-text-secondary">{product.whatItDoes}</p>
                        </div>

                        {/* How to Use */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">How to Use</h3>
                            <p className="text-sm text-text-secondary">{product.howToUse}</p>
                        </div>

                        {/* Full Ingredients */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">
                                Full Ingredient List (INCI)
                            </h3>
                            <p className="text-sm text-text-secondary font-mono leading-relaxed">
                                {product.fullIngredients}
                            </p>
                        </div>

                        {/* Indian Compliance Info */}
                        {(product.batchNo || product.mfgDate || product.expDate) && (
                            <div className="bg-container p-4 text-sm">
                                <h3 className="font-medium mb-2">Product Information</h3>
                                {product.batchNo && (
                                    <p className="text-text-secondary">Batch No: {product.batchNo}</p>
                                )}
                                {product.mfgDate && (
                                    <p className="text-text-secondary">
                                        Mfg Date: {new Date(product.mfgDate).toLocaleDateString()}
                                    </p>
                                )}
                                {product.expDate && (
                                    <p className="text-text-secondary">
                                        Exp Date: {new Date(product.expDate).toLocaleDateString()}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
                            {product.reviews.length > 0 && (
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-medium">
                                        {averageRating.toFixed(1)}
                                    </span>
                                    <span className="text-text-secondary">
                                        ({product.reviews.length} reviews)
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {product.reviews.length === 0 ? (
                        <p className="text-text-secondary">No reviews yet</p>
                    ) : (
                        <div className="space-y-6">
                            {product.reviews.map((review) => (
                                <div key={review.id} className="border-b border-border pb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-3">
                                            <span className="font-medium">{review.user.name}</span>
                                            <span className="text-sm text-text-muted">
                                                {new Date(review.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium">
                                            {review.rating}/5
                                        </span>
                                    </div>
                                    {review.title && (
                                        <h4 className="font-medium mb-1">{review.title}</h4>
                                    )}
                                    <p className="text-sm text-text-secondary">{review.comment}</p>
                                    {review.verified && (
                                        <span className="inline-block mt-2 text-xs text-success">
                                            ✓ Verified Purchase
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

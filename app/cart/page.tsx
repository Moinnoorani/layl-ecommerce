'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
    const { items, updateQuantity, removeItem, totalPrice } = useCart();

    if (items.length === 0) {
        return (
            <>
                <Header />
                <main className="container-custom py-16 min-h-screen">
                    <div className="max-w-2xl mx-auto text-center">
                        <ShoppingBag size={64} className="mx-auto mb-6 text-text-muted" />
                        <h1 className="text-3xl font-semibold mb-4">Your cart is empty</h1>
                        <p className="text-text-secondary mb-8">
                            Add some products to get started
                        </p>
                        <Link
                            href="/shop"
                            className="inline-block px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background)' }}
                        >
                            Continue Shopping
                        </Link>

                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="container-custom py-12 min-h-screen">
                <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.productId}
                                className="bg-white border border-border p-6 flex gap-6"
                            >
                                {/* Product Image */}
                                <div className="w-24 h-24 bg-container flex-shrink-0">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-text-muted text-xs">
                                            {item.name}
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="flex-1">
                                    <div
                                        className="border-l-2 pl-3 mb-3"
                                        style={{ borderColor: item.categoryAccent }}
                                    >
                                        <h3 className="font-medium mb-1">{item.name}</h3>
                                        <p className="text-sm text-text-muted">{item.size}</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center space-x-3">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId, item.quantity - 1)
                                                }
                                                className="w-8 h-8 border border-border flex items-center justify-center hover:bg-container transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-12 text-center font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId, item.quantity + 1)
                                                }
                                                className="w-8 h-8 border border-border flex items-center justify-center hover:bg-container transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right">
                                            <p className="font-semibold">
                                                ₹{(item.price * item.quantity).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-text-muted">
                                                ₹{item.price} each
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeItem(item.productId)}
                                    className="text-error hover:opacity-70 transition-opacity"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-container p-6 sticky top-24">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">Subtotal</span>
                                    <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-secondary">Shipping</span>
                                    <span className="font-medium">
                                        {totalPrice > 500 ? 'FREE' : '₹50'}
                                    </span>
                                </div>
                                <div className="border-t border-border pt-3">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold text-lg">
                                            ₹{(totalPrice + (totalPrice > 500 ? 0 : 50)).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {totalPrice < 500 && (
                                <p className="text-sm text-text-muted mb-6">
                                    Add ₹{(500 - totalPrice).toFixed(2)} more for free shipping
                                </p>
                            )}

                            <Link
                                href="/checkout"
                                className="block w-full text-center py-3 rounded-md hover:opacity-90 transition-opacity mb-3"
                                style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background)' }}
                            >
                                Proceed to Checkout
                            </Link>

                            <Link
                                href="/shop"
                                className="block w-full border border-border text-center py-3 rounded-md hover:bg-container transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

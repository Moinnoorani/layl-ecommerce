'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Customer Info
        email: '',
        name: '',
        phone: '',
        // Shipping Address
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        // Payment
        paymentMethod: 'RAZORPAY_UPI',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Implement actual order creation and payment
        setTimeout(() => {
            alert('Order placed successfully! (Demo mode)');
            clearCart();
            router.push('/');
        }, 2000);
    };

    if (items.length === 0) {
        return (
            <>
                <Header />
                <main className="container-custom py-16 min-h-screen">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-3xl font-semibold mb-4">Your cart is empty</h1>
                        <p className="text-text-secondary mb-8">
                            Add some products before checking out
                        </p>
                        <Link
                            href="/shop"
                            className="inline-block bg-text-primary text-background px-8 py-3"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const shipping = totalPrice > 500 ? 0 : 50;
    const total = totalPrice + shipping;

    return (
        <>
            <Header />
            <main className="container-custom py-12 min-h-screen">
                <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Customer Information */}
                            <div className="bg-white border border-border p-6">
                                <h2 className="text-xl font-semibold mb-6">Customer Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-border"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-border"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-border"
                                                placeholder="+91 "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white border border-border p-6">
                                <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.addressLine1}
                                            onChange={(e) =>
                                                setFormData({ ...formData, addressLine1: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-border"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Address Line 2 (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.addressLine2}
                                            onChange={(e) =>
                                                setFormData({ ...formData, addressLine2: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-border"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">City</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.city}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, city: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-border"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">State</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.state}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, state: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-border"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Pincode</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.pincode}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, pincode: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-border"
                                                maxLength={6}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white border border-border p-6">
                                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                                <div className="space-y-3">
                                    {[
                                        { value: 'RAZORPAY_UPI', label: 'UPI (Google Pay, PhonePe, Paytm)' },
                                        { value: 'RAZORPAY_CARD', label: 'Credit/Debit Card' },
                                        { value: 'RAZORPAY_NETBANKING', label: 'Net Banking' },
                                        { value: 'COD', label: 'Cash on Delivery' },
                                    ].map((method) => (
                                        <label
                                            key={method.value}
                                            className="flex items-center p-4 border border-border cursor-pointer hover:bg-container transition-colors"
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method.value}
                                                checked={formData.paymentMethod === method.value}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, paymentMethod: e.target.value })
                                                }
                                                className="mr-3"
                                            />
                                            <span>{method.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-container p-6 sticky top-24">
                                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                                    {items.map((item) => (
                                        <div key={item.productId} className="flex justify-between text-sm">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-text-muted">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-border pt-4 space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Subtotal</span>
                                        <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Shipping</span>
                                        <span className="font-medium">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                                    </div>
                                    <div className="border-t border-border pt-3">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Total</span>
                                            <span className="font-semibold text-lg">₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-text-primary text-background py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </button>

                                <p className="text-xs text-text-muted mt-4 text-center">
                                    By placing your order, you agree to our Terms & Conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    );
}

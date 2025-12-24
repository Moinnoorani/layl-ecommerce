'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

interface Order {
    id: string;
    orderNumber: string;
    totalAmount: number;
    status: string;
    createdAt: string;
}

export default function AccountPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { theme } = useTheme();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin');
        }
    }, [status, router]);

    useEffect(() => {
        if (session?.user) {
            // Fetch user orders
            fetchOrders();
        }
    }, [session]);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };

    if (status === 'loading') {
        return (
            <>
                <Header />
                <main className="container-custom py-16 min-h-screen">
                    <div className="text-center">
                        <p className="text-text-secondary">Loading...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <>
            <Header />
            <main className="container-custom py-16 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold mb-2">My Account</h1>
                        <p className="text-text-secondary">
                            Manage your account and view your orders
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Account Info */}
                        <div
                            className="md:col-span-1 border border-border p-6 rounded-lg h-fit"
                            style={{
                                backgroundColor: theme === 'dark' ? '#1F1F1F' : '#FFFFFF',
                            }}
                        >
                            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-text-muted mb-1">Name</p>
                                    <p className="font-medium">{session.user?.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted mb-1">Email</p>
                                    <p className="font-medium">{session.user?.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted mb-1">Role</p>
                                    <p className="font-medium capitalize">{session.user?.role}</p>
                                </div>
                            </div>

                            <button
                                onClick={handleSignOut}
                                className="w-full mt-6 py-2 px-4 border border-error text-error rounded-md font-medium transition-all hover:bg-error hover:text-white"
                            >
                                Sign Out
                            </button>
                        </div>

                        {/* Orders */}
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold mb-4">Order History</h2>
                            {loading ? (
                                <div
                                    className="border border-border p-8 rounded-lg text-center"
                                    style={{
                                        backgroundColor: theme === 'dark' ? '#1F1F1F' : '#FFFFFF',
                                    }}
                                >
                                    <p className="text-text-secondary">Loading orders...</p>
                                </div>
                            ) : orders.length === 0 ? (
                                <div
                                    className="border border-border p-8 rounded-lg text-center"
                                    style={{
                                        backgroundColor: theme === 'dark' ? '#1F1F1F' : '#FFFFFF',
                                    }}
                                >
                                    <p className="text-text-secondary mb-4">No orders yet</p>
                                    <Link
                                        href="/shop"
                                        className="inline-block py-2 px-6 border border-text-primary rounded-md font-medium transition-all hover:bg-text-primary hover:text-background"
                                    >
                                        Start Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="border border-border p-6 rounded-lg"
                                            style={{
                                                backgroundColor: theme === 'dark' ? '#1F1F1F' : '#FFFFFF',
                                            }}
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="font-semibold">Order #{order.orderNumber}</p>
                                                    <p className="text-sm text-text-muted">
                                                        {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">₹{order.totalAmount}</p>
                                                    <p className="text-sm text-text-muted capitalize">{order.status}</p>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/orders/${order.id}`}
                                                className="text-sm text-text-primary hover:opacity-70 transition-opacity font-medium"
                                            >
                                                View Details →
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { signIn } from 'next-auth/react';

export default function SignUpPage() {
    const router = useRouter();
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Failed to create account');
                return;
            }

            // Auto sign in after registration
            const result = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                // Registration successful but auto-login failed
                router.push('/auth/signin');
            } else {
                router.push('/account');
                router.refresh();
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Sign up error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <main className="container-custom py-16 min-h-screen">
                <div className="max-w-md mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
                        <p className="text-text-secondary">
                            Join LAYL for science-backed skincare
                        </p>
                    </div>

                    <div
                        className="border border-border p-8 rounded-lg"
                        style={{
                            backgroundColor: theme === 'dark' ? '#1F1F1F' : '#FFFFFF',
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-4 bg-error/10 border border-error/20 rounded-md">
                                    <p className="text-sm text-error">{error}</p>
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-text-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-text-primary transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-text-primary transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-text-primary transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-6 border border-text-primary rounded-md font-medium transition-all hover:bg-text-primary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-text-secondary">
                                Already have an account?{' '}
                                <Link
                                    href="/auth/signin"
                                    className="text-text-primary hover:opacity-70 transition-opacity font-medium"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

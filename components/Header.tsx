'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, User, Moon, Sun } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalItems } = useCart();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 py-4">
            <div className="container-custom">
                {/* Pill-shaped glassmorphism nav */}
                <div
                    className="relative bg-background/40 backdrop-blur-2xl border border-border/20 shadow-2xl px-6 py-3 rounded-full overflow-hidden"
                    style={{
                        backdropFilter: 'blur(24px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
                    }}
                >
                    {/* Glass reflection overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)'
                        }}
                    />
                    <div className="flex items-center justify-between">
                        {/* Left: Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-semibold tracking-tight">
                                LAYL
                            </Link>
                        </div>

                        {/* Center: Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/shop" className="text-base font-medium hover:opacity-70 transition-opacity">
                                Shop
                            </Link>
                            <Link href="/ingredients" className="text-base font-medium hover:opacity-70 transition-opacity">
                                Ingredients
                            </Link>
                            <Link href="/about" className="text-base font-medium hover:opacity-70 transition-opacity">
                                About
                            </Link>
                            <Link href="/contact" className="text-base font-medium hover:opacity-70 transition-opacity">
                                Contact
                            </Link>
                        </nav>

                        {/* Right: Icons */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 hover:bg-container rounded-full transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? (
                                    <Moon size={18} />
                                ) : (
                                    <Sun size={18} />
                                )}
                            </button>
                            <Link href="/account" className="hover:opacity-70 transition-opacity">
                                <User size={18} />
                            </Link>
                            <Link href="/cart" className="hover:opacity-70 transition-opacity relative">
                                <ShoppingCart size={18} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-text-primary text-background text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                            <button
                                className="md:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
                            <div className="flex flex-col space-y-3">
                                <Link
                                    href="/shop"
                                    className="text-base font-medium hover:opacity-70 transition-opacity"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Shop
                                </Link>
                                <Link
                                    href="/ingredients"
                                    className="text-base font-medium hover:opacity-70 transition-opacity"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Ingredients
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-base font-medium hover:opacity-70 transition-opacity"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-base font-medium hover:opacity-70 transition-opacity"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

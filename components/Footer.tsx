import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-container border-t border-border mt-72">
            <div className="container-custom pt-48 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">LAYL</h3>
                        <p className="text-sm text-text-secondary">
                            Science-backed minimalist skincare. Clinical formulations without the gimmicks.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/shop?category=cleanser" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Cleansers & Toners
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=acne" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Acne & Exfoliation
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=hydration" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Hydration & Barrier
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=sunscreen" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Sunscreen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Information</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    About LAYL
                                </Link>
                            </li>
                            <li>
                                <Link href="/ingredients" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Ingredient Library
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Policies</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                                    Shipping Info
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-12 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-text-muted">
                            © {new Date().getFullYear()} LAYL. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <Link href="/faq" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                                FAQ
                            </Link>
                            <Link href="/track-order" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                                Track Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

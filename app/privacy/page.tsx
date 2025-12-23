import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>
                    <p className="text-sm text-text-muted mb-8">Last updated: December 22, 2025</p>

                    <div className="space-y-8 text-text-secondary">
                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Information We Collect</h2>
                            <p className="mb-4">We collect information that you provide directly to us, including:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Name, email address, phone number</li>
                                <li>Shipping and billing addresses</li>
                                <li>Payment information (processed securely through Razorpay)</li>
                                <li>Order history and preferences</li>
                                <li>Communications with customer support</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Process and fulfill your orders</li>
                                <li>Send order confirmations and shipping updates</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Improve our products and services</li>
                                <li>Send marketing communications (with your consent)</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Information Sharing</h2>
                            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Payment processors (Razorpay) to process transactions</li>
                                <li>Shipping partners to deliver your orders</li>
                                <li>Service providers who assist in our operations</li>
                                <li>Law enforcement when required by law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal
                                information. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Cookies</h2>
                            <p>
                                We use cookies and similar technologies to improve your browsing experience,
                                analyze site traffic, and personalize content. You can control cookies through
                                your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Contact Us</h2>
                            <p>
                                For questions about this Privacy Policy or to exercise your rights, contact us at:
                                <br />
                                <strong>Email:</strong> privacy@layl.in
                                <br />
                                <strong>Address:</strong> LAYL Skincare Pvt. Ltd., Mumbai, Maharashtra, India
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

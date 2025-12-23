import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">Terms & Conditions</h1>
                    <p className="text-sm text-text-muted mb-8">Last updated: December 22, 2025</p>

                    <div className="space-y-8 text-text-secondary">
                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using layl.in, you accept and agree to be bound by these Terms and Conditions.
                                If you do not agree, please do not use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Product Information</h2>
                            <p className="mb-4">
                                We strive to provide accurate product information, including ingredients, concentrations,
                                and usage instructions. However:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Product formulations may be updated based on new research</li>
                                <li>Actual product packaging may differ from website images</li>
                                <li>Results may vary based on individual skin type and conditions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Orders and Payments</h2>
                            <p className="mb-4">
                                All orders are subject to acceptance and availability. We reserve the right to refuse
                                or cancel any order. Payment must be received before order processing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Pricing</h2>
                            <p>
                                All prices are in Indian Rupees (INR) and include applicable taxes. We reserve the
                                right to change prices without notice. Promotional offers are subject to terms and
                                conditions specified at the time of the offer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. User Responsibilities</h2>
                            <p className="mb-4">You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide accurate and complete information</li>
                                <li>Use products as directed</li>
                                <li>Perform patch tests before full application</li>
                                <li>Consult a dermatologist if you have concerns</li>
                                <li>Not resell our products without authorization</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Limitation of Liability</h2>
                            <p>
                                LAYL is not liable for any indirect, incidental, or consequential damages arising
                                from product use. Our liability is limited to the purchase price of the product.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, images, logos, and formulations, is
                                the property of LAYL and protected by intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of India. Any disputes shall be subject to
                                the exclusive jurisdiction of courts in Mumbai, Maharashtra.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Contact</h2>
                            <p>
                                For questions about these Terms, contact us at:
                                <br />
                                <strong>Email:</strong> legal@layl.in
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

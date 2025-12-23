import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPage() {
    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">Refund & Return Policy</h1>
                    <p className="text-sm text-text-muted mb-8">Last updated: December 22, 2025</p>

                    <div className="space-y-8 text-text-secondary">
                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">30-Day Money-Back Guarantee</h2>
                            <p>
                                We stand behind our products. If you're not satisfied with your purchase, you can
                                return it within 30 days of delivery for a full refund.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Eligible Returns</h2>
                            <p className="mb-4">Products are eligible for return if:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Returned within 30 days of delivery</li>
                                <li>Product is at least 50% full</li>
                                <li>Original packaging is included</li>
                                <li>Product is not damaged due to misuse</li>
                                <li>Batch number matches the order</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Non-Returnable Items</h2>
                            <p className="mb-4">The following items cannot be returned:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Products purchased during final sale events</li>
                                <li>Gift cards</li>
                                <li>Products with broken seals (for hygiene reasons)</li>
                                <li>Products showing signs of misuse or damage</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Return Process</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Step 1: Contact Us</h3>
                                    <p>Email support@layl.in with your order number and reason for return.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Step 2: Receive Authorization</h3>
                                    <p>We'll send you a Return Authorization (RA) number and return instructions.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Step 3: Ship the Product</h3>
                                    <p>Pack the product securely and ship it to our returns address with the RA number.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Step 4: Receive Refund</h3>
                                    <p>Once we receive and inspect the product, we'll process your refund within 5-7 business days.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Refund Method</h2>
                            <p className="mb-4">Refunds will be issued to the original payment method:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Credit/Debit Card: 5-7 business days</li>
                                <li>UPI/Net Banking: 3-5 business days</li>
                                <li>Cash on Delivery: Bank transfer (provide account details)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Damaged or Defective Products</h2>
                            <p>
                                If you receive a damaged or defective product, contact us immediately with photos.
                                We'll arrange for a replacement or full refund at no cost to you, including return shipping.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Exchanges</h2>
                            <p>
                                We currently do not offer direct exchanges. If you'd like a different product,
                                please return the original item for a refund and place a new order.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Return Shipping Costs</h2>
                            <p className="mb-4">
                                <strong>Customer Responsibility:</strong> If you're returning a product due to
                                personal preference, you're responsible for return shipping costs.
                            </p>
                            <p>
                                <strong>Our Responsibility:</strong> If the product is damaged, defective, or
                                we sent the wrong item, we'll cover return shipping costs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Contact Us</h2>
                            <p>
                                For return inquiries:
                                <br />
                                <strong>Email:</strong> support@layl.in
                                <br />
                                <strong>Phone:</strong> +91 123 456 7890
                                <br />
                                <strong>Hours:</strong> Mon-Sat, 10 AM - 6 PM IST
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

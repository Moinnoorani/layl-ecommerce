import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, Truck, MapPin, Clock } from 'lucide-react';

export default function ShippingPage() {
    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">Shipping Information</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-container p-6">
                            <Package className="mb-4 text-text-primary" size={32} />
                            <h3 className="font-semibold mb-2">Free Shipping</h3>
                            <p className="text-sm text-text-secondary">
                                On all orders above ₹500
                            </p>
                        </div>
                        <div className="bg-container p-6">
                            <Truck className="mb-4 text-text-primary" size={32} />
                            <h3 className="font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-sm text-text-secondary">
                                3-5 business days across India
                            </p>
                        </div>
                        <div className="bg-container p-6">
                            <MapPin className="mb-4 text-text-primary" size={32} />
                            <h3 className="font-semibold mb-2">Pan-India Coverage</h3>
                            <p className="text-sm text-text-secondary">
                                We ship to all serviceable pincodes
                            </p>
                        </div>
                        <div className="bg-container p-6">
                            <Clock className="mb-4 text-text-primary" size={32} />
                            <h3 className="font-semibold mb-2">Order Processing</h3>
                            <p className="text-sm text-text-secondary">
                                Orders dispatched within 24-48 hours
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 text-text-secondary">
                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Shipping Rates</h2>
                            <div className="bg-white border border-border p-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center pb-3 border-b border-border">
                                        <span>Orders above ₹500</span>
                                        <span className="font-semibold text-success">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Orders below ₹500</span>
                                        <span className="font-semibold">₹50</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Delivery Timeline</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Metro Cities</h3>
                                    <p>Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata: 2-3 business days</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Tier 1 & 2 Cities</h3>
                                    <p>Major cities and towns: 3-5 business days</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-text-primary mb-2">Remote Areas</h3>
                                    <p>Remote locations: 5-7 business days</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Order Processing</h2>
                            <p className="mb-4">
                                All orders are processed within 24-48 hours of payment confirmation. Orders placed
                                on weekends or holidays will be processed on the next business day.
                            </p>
                            <p>
                                You will receive an order confirmation email immediately after placing your order,
                                followed by a shipping confirmation with tracking details once your order is dispatched.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Order Tracking</h2>
                            <p className="mb-4">
                                Once your order is shipped, you'll receive a tracking number via email and SMS.
                                You can track your order using:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>The tracking link in your shipping confirmation email</li>
                                <li>Your account dashboard on our website</li>
                                <li>Our courier partner's website</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Shipping Partners</h2>
                            <p>
                                We work with reliable courier partners including Delhivery, Blue Dart, and India Post
                                to ensure safe and timely delivery of your orders.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Packaging</h2>
                            <p>
                                All products are carefully packaged to prevent damage during transit. We use:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                                <li>Bubble wrap for product protection</li>
                                <li>Sturdy corrugated boxes</li>
                                <li>Tamper-proof sealing</li>
                                <li>Minimal, recyclable packaging materials</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Delivery Attempts</h2>
                            <p className="mb-4">
                                Our courier partners will make up to 3 delivery attempts. If delivery is unsuccessful
                                after 3 attempts, the order will be returned to us.
                            </p>
                            <p>
                                Please ensure someone is available to receive the package, or provide delivery
                                instructions if needed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">International Shipping</h2>
                            <p>
                                We currently ship only within India. International shipping will be available soon.
                                Sign up for our newsletter to be notified when we start shipping internationally.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-text-primary mb-4">Issues with Delivery</h2>
                            <p className="mb-4">
                                If you experience any issues with your delivery:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Package not received after expected delivery date</li>
                                <li>Package received in damaged condition</li>
                                <li>Wrong or missing items</li>
                            </ul>
                            <p className="mt-4">
                                Please contact us immediately at <strong>support@layl.in</strong> or call
                                <strong> +91 123 456 7890</strong>. We'll resolve the issue promptly.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

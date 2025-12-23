'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // TODO: Implement actual form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">Contact Us</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-border focus:border-text-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-border focus:border-text-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({ ...formData, subject: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-border focus:border-text-primary"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border border-border focus:border-text-primary resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-text-primary text-background py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <p className="text-success text-sm">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-error text-sm">
                                        Failed to send message. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Mail className="text-text-secondary mt-1" size={20} />
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <a
                                            href="mailto:support@layl.in"
                                            className="text-text-secondary hover:text-text-primary transition-colors"
                                        >
                                            support@layl.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="text-text-secondary mt-1" size={20} />
                                    <div>
                                        <h3 className="font-medium mb-1">Phone</h3>
                                        <a
                                            href="tel:+911234567890"
                                            className="text-text-secondary hover:text-text-primary transition-colors"
                                        >
                                            +91 123 456 7890
                                        </a>
                                        <p className="text-sm text-text-muted mt-1">
                                            Mon-Sat, 10 AM - 6 PM IST
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="text-text-secondary mt-1" size={20} />
                                    <div>
                                        <h3 className="font-medium mb-1">Address</h3>
                                        <p className="text-text-secondary">
                                            LAYL Skincare Pvt. Ltd.
                                            <br />
                                            Business Park
                                            <br />
                                            Surat, Gujarat 395009
                                            <br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-container p-6">
                                <h3 className="font-medium mb-3">Customer Support</h3>
                                <p className="text-sm text-text-secondary mb-4">
                                    For order-related queries, please include your order number in the
                                    subject line for faster resolution.
                                </p>
                                <p className="text-sm text-text-secondary">
                                    We typically respond within 24-48 hours during business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

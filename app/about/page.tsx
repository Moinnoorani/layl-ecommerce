import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8">About LAYL</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
                            <p className="text-text-secondary leading-relaxed">
                                LAYL was founded on a simple principle: skincare should be based on science,
                                not marketing. We believe in transparent formulations, proven ingredients,
                                and honest communication about what works and what doesn't.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Science-Backed Formulations</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Every ingredient in our products is chosen based on peer-reviewed research
                                and clinical evidence. We don't use ingredients just because they're trendy
                                or sound good in marketing materials.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Our formulations are developed with input from dermatologists and cosmetic
                                chemists to ensure they're both effective and safe for long-term use.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Transparency First</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                We believe you have the right to know exactly what you're putting on your skin.
                                That's why we provide:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                <li>Complete INCI ingredient lists for every product</li>
                                <li>Exact concentrations of active ingredients</li>
                                <li>Clear usage instructions and contraindications</li>
                                <li>Honest information about what each product can and cannot do</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">No Marketing Fluff</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We don't make miracle claims or use emotional manipulation to sell products.
                                Our packaging is minimal, our communication is direct, and our focus is on
                                formulation quality rather than flashy marketing campaigns.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Minimalist Approach</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We believe in doing a few things exceptionally well rather than offering
                                hundreds of products. Each formulation in our range serves a specific purpose
                                and is designed to work effectively without unnecessary complexity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Quality Standards</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                All our products are:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                <li>Manufactured in certified facilities</li>
                                <li>Dermatologically tested</li>
                                <li>Free from parabens, sulfates, and unnecessary fragrances</li>
                                <li>Cruelty-free (never tested on animals)</li>
                                <li>Compliant with Indian cosmetic regulations</li>
                            </ul>
                        </section>

                        <section className="bg-container p-8 mt-12">
                            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We're committed to continuous improvement based on the latest scientific
                                research. As new evidence emerges, we update our formulations and
                                recommendations accordingly. Your skin deserves nothing less than
                                evidence-based care.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

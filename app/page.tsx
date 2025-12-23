import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-6">
        {/* Hero Section - Simple & Direct */}
        <section className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balance">
              Science-backed formulations. Nothing else.
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl">
              Clinical-grade skincare with transparent ingredient lists, proven concentrations, and no marketing fluff.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-md hover:opacity-90 transition-opacity [&]:!text-white dark:[&]:!text-gray-900 mb-12"
            >
              <span>Shop All Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container-custom py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link href="/shop" className="text-sm hover:opacity-70 transition-opacity">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group">
              <div className="bg-white border border-border mb-4 aspect-square flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-container flex items-center justify-center text-text-muted">
                  Product Image
                </div>
              </div>
              <div className="border-l-2 border-accent-hydration pl-3">
                <h3 className="font-medium mb-1">Hyaluronic Acid 2% + B5</h3>
                <p className="text-sm text-text-secondary mb-2">Hydration & Barrier</p>
                <p className="text-sm text-text-muted mb-3">30ml</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">₹499</span>
                    <span className="text-sm text-text-muted line-through ml-2">₹699</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="bg-white border border-border mb-4 aspect-square flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-container flex items-center justify-center text-text-muted">
                  Product Image
                </div>
              </div>
              <div className="border-l-2 border-accent-acne pl-3">
                <h3 className="font-medium mb-1">Salicylic Acid 2%</h3>
                <p className="text-sm text-text-secondary mb-2">Acne & Exfoliation</p>
                <p className="text-sm text-text-muted mb-3">30ml</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">₹549</span>
                    <span className="text-sm text-text-muted line-through ml-2">₹749</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="bg-white border border-border mb-4 aspect-square flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-container flex items-center justify-center text-text-muted">
                  Product Image
                </div>
              </div>
              <div className="border-l-2 border-accent-sunscreen pl-3">
                <h3 className="font-medium mb-1">SPF 50 PA++++ Sunscreen</h3>
                <p className="text-sm text-text-secondary mb-2">Sunscreen</p>
                <p className="text-sm text-text-muted mb-3">50ml</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold">₹599</span>
                    <span className="text-sm text-text-muted line-through ml-2">₹799</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why LAYL */}
        <section className="bg-container py-16 mt-16">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-12 text-center">Why LAYL</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="font-medium mb-3">Science-Backed</h3>
                <p className="text-sm text-text-secondary">
                  Every ingredient is chosen based on peer-reviewed research and clinical evidence.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-3">Transparent Formulation</h3>
                <p className="text-sm text-text-secondary">
                  Complete INCI lists, exact concentrations, and no hidden ingredients.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-3">No Marketing Fluff</h3>
                <p className="text-sm text-text-secondary">
                  Honest communication about what works and what doesn't. No miracle claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="container-custom py-16">
          <h2 className="text-2xl font-semibold mb-8">Shop by Concern</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/shop?category=cleanser"
              className="border border-border p-6 hover:border-accent-cleanser transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Cleanser & Toner</h3>
            </Link>
            <Link
              href="/shop?category=acne"
              className="border border-border p-6 hover:border-accent-acne transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Acne & Exfoliation</h3>
            </Link>
            <Link
              href="/shop?category=hydration"
              className="border border-border p-6 hover:border-accent-hydration transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Hydration</h3>
            </Link>
            <Link
              href="/shop?category=sunscreen"
              className="border border-border p-6 hover:border-accent-sunscreen transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Sunscreen</h3>
            </Link>
            <Link
              href="/shop?category=antiaging"
              className="border border-border p-6 hover:border-accent-antiaging transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Anti-Aging</h3>
            </Link>
            <Link
              href="/shop?category=bodycare"
              className="border border-border p-6 hover:border-accent-bodycare transition-colors"
            >
              <div className="w-full aspect-square bg-container mb-3"></div>
              <h3 className="text-sm font-medium">Body Care</h3>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

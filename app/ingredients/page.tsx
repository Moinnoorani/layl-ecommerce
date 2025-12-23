'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

const ingredients = [
    {
        name: 'Hyaluronic Acid',
        category: 'Hydration',
        description: 'A humectant that can hold up to 1000x its weight in water, providing deep hydration to all skin layers.',
        benefits: ['Deep hydration', 'Plumps skin', 'Reduces fine lines', 'Suitable for all skin types'],
        concentration: '0.5-2%',
        safety: 'Generally safe for all skin types. Non-irritating.',
    },
    {
        name: 'Salicylic Acid',
        category: 'Acne & Exfoliation',
        description: 'A beta hydroxy acid (BHA) that penetrates pores to dissolve oil and dead skin cells.',
        benefits: ['Unclogs pores', 'Reduces acne', 'Exfoliates', 'Anti-inflammatory'],
        concentration: '0.5-2%',
        safety: 'May cause dryness. Start slowly. Avoid if pregnant.',
    },
    {
        name: 'Niacinamide',
        category: 'Multi-Purpose',
        description: 'Vitamin B3 that regulates oil production, strengthens skin barrier, and reduces inflammation.',
        benefits: ['Controls oil', 'Minimizes pores', 'Brightens skin', 'Strengthens barrier'],
        concentration: '2-10%',
        safety: 'Well-tolerated by most skin types. Very safe.',
    },
    {
        name: 'Retinol',
        category: 'Anti-Aging',
        description: 'Vitamin A derivative that increases cell turnover and stimulates collagen production.',
        benefits: ['Reduces wrinkles', 'Improves texture', 'Fades hyperpigmentation', 'Boosts collagen'],
        concentration: '0.25-1%',
        safety: 'Can cause irritation. Use at night. Requires sunscreen. Avoid if pregnant.',
    },
    {
        name: 'Vitamin C (L-Ascorbic Acid)',
        category: 'Brightening',
        description: 'Potent antioxidant that brightens skin and protects against free radical damage.',
        benefits: ['Brightens skin', 'Fades dark spots', 'Antioxidant protection', 'Boosts collagen'],
        concentration: '10-20%',
        safety: 'May irritate sensitive skin. Store in dark, cool place.',
    },
    {
        name: 'Zinc Oxide',
        category: 'Sun Protection',
        description: 'Physical sunscreen ingredient that reflects UV rays. Provides broad-spectrum protection.',
        benefits: ['UVA/UVB protection', 'Non-irritating', 'Suitable for sensitive skin', 'Immediate protection'],
        concentration: '15-25%',
        safety: 'Very safe. Suitable for all skin types including sensitive.',
    },
    {
        name: 'Ceramides',
        category: 'Barrier Repair',
        description: 'Lipids naturally found in skin that help maintain the protective barrier.',
        benefits: ['Repairs barrier', 'Prevents moisture loss', 'Reduces sensitivity', 'Strengthens skin'],
        concentration: '1-5%',
        safety: 'Extremely safe. Suitable for all skin types.',
    },
    {
        name: 'Glycolic Acid',
        category: 'Exfoliation',
        description: 'Alpha hydroxy acid (AHA) that exfoliates the surface layer of skin.',
        benefits: ['Exfoliates dead skin', 'Brightens', 'Improves texture', 'Reduces hyperpigmentation'],
        concentration: '5-10%',
        safety: 'May cause irritation. Requires sunscreen. Start with low concentration.',
    },
];

export default function IngredientsPage() {
    const { theme } = useTheme();

    return (
        <>
            <Header />
            <main className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-4">Ingredient Library</h1>
                    <p className="text-text-secondary mb-12">
                        Science-backed information about the active ingredients in our formulations.
                        All information is based on peer-reviewed research.
                    </p>

                    <div className="space-y-8">
                        {ingredients.map((ingredient, index) => (
                            <div
                                key={index}
                                className="border border-border p-6 hover:shadow-md transition-shadow"
                                style={{ backgroundColor: theme === 'dark' ? 'var(--container)' : '#FFFFFF' }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-1">{ingredient.name}</h2>
                                        <p className="text-sm text-text-muted">{ingredient.category}</p>
                                    </div>
                                    <span className="bg-container px-3 py-1 text-sm font-medium">
                                        {ingredient.concentration}
                                    </span>
                                </div>

                                <p className="text-text-secondary mb-4">{ingredient.description}</p>

                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold mb-2">Benefits</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {ingredient.benefits.map((benefit, idx) => (
                                            <li key={idx} className="text-sm text-text-secondary flex items-center">
                                                <span className="w-1.5 h-1.5 bg-text-primary rounded-full mr-2"></span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-container p-4">
                                    <h3 className="text-sm font-semibold mb-1">Safety Information</h3>
                                    <p className="text-sm text-text-secondary">{ingredient.safety}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-container p-8">
                        <h2 className="text-xl font-semibold mb-4">How to Read Ingredient Lists</h2>
                        <div className="space-y-3 text-sm text-text-secondary">
                            <p>
                                <strong>INCI Names:</strong> International Nomenclature of Cosmetic Ingredients.
                                Standardized names used worldwide.
                            </p>
                            <p>
                                <strong>Order Matters:</strong> Ingredients are listed in descending order by
                                concentration (except for ingredients below 1%).
                            </p>
                            <p>
                                <strong>Concentration:</strong> The percentage of an active ingredient in a
                                formulation. Higher isn't always better.
                            </p>
                            <p>
                                <strong>pH Matters:</strong> Some ingredients (like Vitamin C and AHAs) require
                                specific pH levels to be effective.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

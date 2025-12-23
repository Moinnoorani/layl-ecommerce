# LAYL - Science-Backed Minimalist Skincare

A modern e-commerce platform for LAYL, a minimalist skincare brand focused on science-backed formulations with transparent ingredient lists.

## 🎨 Design Philosophy

- **Minimalist & Clinical** - Pharmaceutical-grade aesthetic
- **Science-Backed** - Evidence-based product information
- **Transparent** - Complete ingredient lists with concentrations
- **Accessible** - WCAG compliant with dark mode support

## 🛠️ Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Authentication:** NextAuth.js (configured)
- **Payments:** Razorpay (ready to integrate)
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon recommended)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env file with:
DATABASE_URL="your_postgresql_connection_string"

# Generate Prisma Client
npx prisma generate

# Push database schema
npx prisma db push

# Seed database with sample products
npx prisma db seed

# Start development server
npm run dev
```

Visit `http://localhost:3000`

**Note:** Due to a Turbopack/Prisma compatibility issue in Next.js 16, the shop page may not work in development. **This is resolved in production builds automatically.**

## 📦 Features

### Implemented ✅

- Product catalog with categories
- Shopping cart with local storage
- Dark/Light mode toggle
- Responsive design
- Product detail pages
- Ingredient library
- Category filtering
- Footer with links
- Branded product images

### Coming Soon 🚧

- Admin dashboard
- User authentication
- Checkout with Razorpay
- Order management
- Product reviews
- Email notifications

## 🗂️ Project Structure

```
layl-website/
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── shop/          # Shop page
│   ├── cart/          # Cart page
│   ├── product/       # Product detail pages
│   └── ...
├── components/        # React components
├── contexts/          # React contexts (Cart, Theme)
├── lib/              # Utilities (Prisma, Auth)
├── prisma/           # Database schema & seed
├── public/           # Static assets
│   └── products/     # Product images
└── ...
```

## 🎨 Brand Colors

- **Sage Green:** #8B9A8B (Cleanser & Toner)
- **Clay Red:** #A67C7C (Acne & Exfoliation)
- **Dusty Blue:** #7B8FA3 (Hydration & Barrier)
- **Sand Yellow:** #C9B896 (Sunscreen)
- **Muted Mauve:** #9B8B9B (Anti-Aging)
- **Stone Grey:** #8B8B8B (Body Care)

## 📝 Database Schema

- **Users** - Customer accounts with role-based access
- **Products** - Full product catalog
- **Categories** - Product organization
- **Orders** - Order tracking and management
- **Coupons** - Discount codes
- **Reviews** - Product reviews (ready to implement)

## 🔐 Default Admin Account

- **Email:** admin@layl.in
- **Password:** admin123

*Change this in production!*

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

**Quick Deploy:**

1. Push to GitHub
2. Import to Vercel
3. Add `DATABASE_URL` environment variable
4. Deploy!

## 📄 License

Proprietary - All rights reserved

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.

---

Built with ❤️ for LAYL

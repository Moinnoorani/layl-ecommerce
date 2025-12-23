import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LAYL - Science-Backed Minimalist Skincare",
  description: "Clinical, honest, and effective skincare formulations. No gimmicks, just science.",
  keywords: ["skincare", "minimalist skincare", "science-backed", "clinical skincare", "LAYL"],
  authors: [{ name: "LAYL" }],
  openGraph: {
    title: "LAYL - Science-Backed Minimalist Skincare",
    description: "Clinical, honest, and effective skincare formulations.",
    url: "https://layl.in",
    siteName: "LAYL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrueInsightsAI - GEO SEO & Local Search Intelligence",
  description: "Track, analyze, and grow your local search presence across Google, Bing, and Apple Maps with TrueInsightsAI's powerful GEO SEO platform.",
  keywords: ["GEO SEO", "local SEO", "search visibility", "local search", "SEO analytics", "business intelligence"],
  authors: [{ name: "TrueInsightsAI" }],
  openGraph: {
    title: "TrueInsightsAI - GEO SEO & Local Search Intelligence",
    description: "Track, analyze, and grow your local search presence across Google, Bing, and Apple Maps.",
    url: "https://trueinsightsai.com",
    siteName: "TrueInsightsAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueInsightsAI - GEO SEO & Local Search Intelligence",
    description: "Track, analyze, and grow your local search presence across Google, Bing, and Apple Maps.",
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
        {children}
      </body>
    </html>
  );
}

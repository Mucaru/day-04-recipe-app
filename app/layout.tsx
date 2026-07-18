import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { ToastProvider } from "@/components/ui/Toast";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ResepKu — Masak Apa Hari Ini?",
  description: "Jelajahi ribuan resep dari seluruh dunia. Dari yang simpel sampai yang chef banget.",
  keywords: ["resep masakan", "recipe", "masak", "kuliner"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ResepKu — Masak Apa Hari Ini?",
    description: "Jelajahi ribuan resep dari seluruh dunia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://www.themealdb.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <FavoritesProvider>
          <ToastProvider>
            {children}
            <Footer />
            <ScrollToTop />
          </ToastProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResepKu — Masak Apa Hari Ini?",
  description: "Jelajahi ribuan resep dari seluruh dunia. Dari yang simpel sampai yang chef banget.",
  keywords: ["resep masakan", "recipe", "masak", "kuliner"],
  openGraph: {
    title: "ResepKu — Masak Apa Hari Ini?",
    description: "Jelajahi ribuan resep dari seluruh dunia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
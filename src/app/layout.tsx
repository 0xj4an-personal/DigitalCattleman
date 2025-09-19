import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganadero Digital - Premium Cattle Trading Platform",
  description: "Discover premium cattle from Colombia's finest ranches. Connect your wallet, buy with crypto, and join the digital ganadería revolution.",
  keywords: ["cattle", "ganadería", "crypto", "blockchain", "cattle trading", "Web3", "digital farming", "livestock"],
  authors: [{ name: "Ganadero Digital" }],
  creator: "Ganadero Digital",
  publisher: "Ganadero Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://digitalcattleman.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ganadero Digital - Premium Cattle Trading Platform",
    description: "Discover premium cattle from Colombia's finest ranches. Connect your wallet, buy with crypto, and join the digital ganadería revolution.",
    url: 'https://digitalcattleman.com',
    siteName: 'Ganadero Digital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ganadero Digital - Premium Cattle Trading Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ganadero Digital - Premium Cattle Trading Platform",
    description: "Discover premium cattle from Colombia's finest ranches. Connect your wallet, buy with crypto, and join the digital ganadería revolution.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#3E7C4A" />
      </head>
      <body className="min-h-screen transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

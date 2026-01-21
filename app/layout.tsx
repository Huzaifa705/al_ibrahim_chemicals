import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://al-ibrahim-chemicals.vercel.app'),
    title: {
    default: "Al-Ibrahim Group | Premium Chemical Suppliers in Pakistan",
    template: "%s | Al-Ibrahim Group" // Template for child pages
  },
  description: "Leading chemical distribution company in Pakistan since 2010. ISO-certified chemicals for pharmaceutical, textile, construction, and agriculture industries. 500+ global partners, 50+ countries served.",
  keywords: [
    "chemical suppliers Pakistan",
    "industrial chemicals Karachi",
    "chemical distribution Pakistan",
    "ISO certified chemicals",
    "pharmaceutical chemicals Pakistan",
    "textile chemicals supplier",
    "construction chemicals Pakistan",
    "agriculture chemicals",
    "Al-Ibrahim Group",
    "chemical trading Pakistan"
  ],
   authors: [{ name: "Al-Ibrahim Group", url: "https://al-ibrahim-chemicals.vercel.app" }],
  openGraph: {
    title: "Al-Ibrahim Group | Premium Chemical Suppliers",
    description: "World-class chemical products with ISO-certified quality. Serving 50+ countries with 500+ global partners.",
    url: "https://yourdomain.com",
    siteName: "Al-Ibrahim Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Ibrahim Group Chemical Suppliers",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
   twitter: {
    card: "summary_large_image",
    title: "Al-Ibrahim Group | Premium Chemical Suppliers",
    description: "Leading chemical distribution in Pakistan since 2010",
    images: ["/twitter-image.jpg"],
  },
 robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
   alternates: {
    canonical: "https://al-ibrahim-chemicals.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Al-Ibrahim Group",
              "url": "https://al-ibrahim-chemicals.vercel.app",
              "logo": "https://al-ibrahim-chemicals.vercel.app/logo.png",
              "description": "Leading chemical distribution company in Pakistan since 2010",
              "foundingDate": "2010",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@al-ibrahim.com",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alibrahimgroupofcompanies.com"),
  title: {
    default: "Al-Ibrahim Group | Premium Chemical & LED Suppliers in Pakistan",
    template: "%s | Al-Ibrahim Group",
  },
  description:
    "Leading industrial chemical distributor and premium Universe LED lighting supplier in Pakistan since 2005. ISO-certified quality, 500+ global partners, serving 14+ industries.",
  keywords: [
    "chemical suppliers Pakistan",
    "industrial chemicals Karachi",
    "Universe LED Pakistan",
    "LED lights Karachi",
    "chemical distribution Pakistan",
    "ISO certified chemicals",
    "Al-Ibrahim Group",
  ],
  authors: [{ name: "Al-Ibrahim Group", url: "https://alibrahimgroupofcompanies.com" }],
  openGraph: {
    title: "Al-Ibrahim Group of Companies",
    description: "World-class chemical products and premium LED technology. ISO-certified quality serving industries worldwide.",
    url: "https://alibrahimgroupofcompanies.com",
    siteName: "Al-Ibrahim Group",
    images: [
      {
        url: "/images/companyLogo.png", // Ensures WhatsApp/LinkedIn pull your logo
        width: 1200,
        height: 630,
        alt: "Al-Ibrahim Group",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Ibrahim Group | Premium Chemical Suppliers",
    description: "Leading chemical distribution in Pakistan since 2005.",
    images: ["/images/companyLogo.png"],
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
    canonical: "https://alibrahimgroupofcompanies.com",
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
        {/* Elite Organization Schema for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Al-Ibrahim Group of Companies",
              alternateName: "Al-Ibrahim Chemicals",
              url: "https://alibrahimgroupofcompanies.com",
              logo: "https://alibrahimgroupofcompanies.com/images/companyLogo.png",
              description: "Leading industrial chemical and LED lighting distributor in Pakistan since 2005.",
              foundingDate: "2005",
              founder: {
                "@type": "Person",
                name: "Muhammad Ibrahim Peerzada"
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "L-3, Block-22, F.B Industrial Area",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                postalCode: "75950",
                addressCountry: "PK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-315-8966670",
                contactType: "Customer Service",
                email: "al.ibrahim.group.of.companies@gmail.com",
                areaServed: "PK",
                availableLanguage: ["English", "Urdu"],
              },
              sameAs: [
                "https://alibrahimgroupofcompanies.com"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
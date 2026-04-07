import { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "Al-Ibrahim Group | Chemical Suppliers & LED Solutions Pakistan",
  description:
    "Leading chemical suppliers in Pakistan since 2005. Premium industrial chemicals, LED lighting solutions. Serving pharmaceutical, textile, construction industries. ISO certified, 500+ partners.",
  keywords: [
    "chemical suppliers Pakistan",
    "LED lights Pakistan",
    "industrial chemicals Karachi",
    "powder chemicals Pakistan",
    "liquid chemicals Pakistan"
  ],
  alternates: {
    canonical: "https://alibrahimgroupofcompanies.com",
  },
  openGraph: {
    title: "Al-Ibrahim Group | Chemical Suppliers & LED Solutions Pakistan",
    description:
      "Premium chemical distribution and LED solutions in Pakistan. ISO certified quality since 2005.",
    url: "https://alibrahimgroupofcompanies.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Sitelinks Search Box Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Al-Ibrahim Group",
            url: "https://alibrahimgroupofcompanies.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://alibrahimgroupofcompanies.com/ibrahim-chemical?search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
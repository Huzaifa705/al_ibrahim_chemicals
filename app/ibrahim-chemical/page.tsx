import { Metadata } from 'next'
import ProductsContent from './products-content'

export const metadata: Metadata = {
  title: "Chemical Products & Solutions | 14+ Industries Served",
  description: "Premium liquid and powder chemicals for paints, resins, textile, pharmaceutical, agriculture, cosmetics industries. ISO certified quality. Global sourcing from USA, China, Germany, UAE.",
  keywords: [
    "liquid chemicals Pakistan",
    "powder chemicals supplier",
    "paint chemicals",
    "textile chemicals",
    "pharmaceutical chemicals",
    "resin supplier Pakistan"
  ],
  alternates: {
    canonical: "https://alibrahimgroupofcompanies.com/ibrahim-chemical",
  },
  openGraph: {
    title: "Chemical Products & Solutions | 14+ Industries",
    description: "Premium chemicals for paints, textile, pharmaceutical, agriculture. ISO certified.",
    url: "https://alibrahimgroupofcompanies.com/ibrahim-chemical",
  },
}

export default function Products() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Industrial Chemical Solutions",
            "description": "Premium liquid and powder chemicals for 14+ industries",
            "url": "https://alibrahimgroupofcompanies.com/ibrahim-chemical",
            "brand": {
              "@type": "Brand",
              "name": "Al-Ibrahim Group"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "PKR",
              "offerCount": "500"
            }
          })
        }}
      />
      <ProductsContent />
    </>
  )
}
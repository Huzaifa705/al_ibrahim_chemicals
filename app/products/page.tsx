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
    canonical: "https://al-ibrahim-chemicals.vercel.app/products",
  },
  openGraph: {
    title: "Chemical Products & Solutions | 14+ Industries",
    description: "Premium chemicals for paints, textile, pharmaceutical, agriculture. ISO certified.",
    url: "https://al-ibrahim-chemicals.vercel.app/products",
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
            "brand": {
              "@type": "Brand",
              "name": "Al-Ibrahim Group"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "PKR"
            }
          })
        }}
      />
      <ProductsContent />
    </>
  )
}

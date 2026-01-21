import { Metadata } from 'next'
import LEDContent from './led-content'

export const metadata: Metadata = {
  title: "Universe LED | Energy-Efficient LED Lighting Solutions Pakistan",
  description: "Premium LED lights Pakistan - Panel lights, bulbs, tube lights. 80% energy savings, 50,000+ hours lifespan.",
  keywords: ["LED lights Pakistan", "LED bulbs Karachi", "smart LED lights"],
  alternates: {
    canonical: "https://al-ibrahim-chemicals.vercel.app/universe-led",
  },
}

export default function UniverseLED() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Universe LED Lighting Solutions",
            "brand": { "@type": "Brand", "name": "Universe LED" }
          })
        }}
      />
      <LEDContent />
    </>
  )
}

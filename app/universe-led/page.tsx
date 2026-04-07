import { Metadata } from 'next'
import LEDContent from './led-content'

export const metadata: Metadata = {
  title: "Universe LED | Energy-Efficient Lighting Solutions",
  description: "Premium LED lights Pakistan - Panel lights, bulbs, tube lights, and circuit breakers. 80% energy savings, 50,000+ hours lifespan.",
  keywords: ["LED lights Pakistan", "LED bulbs Karachi", "smart LED lights", "industrial LED Pakistan", "Universe LED"],
  alternates: {
    canonical: "https://alibrahimgroupofcompanies.com/universe-led",
  },
  openGraph: {
    title: "Universe LED | Premium Lighting Solutions",
    description: "Energy-efficient LED lighting for residential, commercial, and industrial applications.",
    url: "https://alibrahimgroupofcompanies.com/universe-led",
  }
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
            "url": "https://alibrahimgroupofcompanies.com/universe-led",
            "description": "Energy-efficient LED products including panel lights, down lights, and circuit breakers.",
            "brand": { 
              "@type": "Brand", 
              "name": "Universe LED" 
            }
          })
        }}
      />
      <LEDContent />
    </>
  )
}
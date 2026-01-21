import { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: "Contact Us | Get Chemical Solutions Quote",
  description: "Contact Al-Ibrahim Group for chemical supply inquiries. Located in Karachi, Pakistan. 24-hour response time.",
  keywords: ["contact Al-Ibrahim Group", "chemical supplier contact Karachi"],
  alternates: {
    canonical: "https://al-ibrahim-chemicals.vercel.app/contact",
  },
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Al-Ibrahim Group",
            "mainEntity": {
              "@type": "Organization",
              "name": "Al-Ibrahim Group",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              }
            }
          })
        }}
      />
      <ContactContent />
    </>
  )
}

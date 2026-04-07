import { Metadata } from 'next'
import ContactContent from './contact-content'

export const metadata: Metadata = {
  title: "Contact Us | Get Chemical Solutions Quote",
  description: "Contact Al-Ibrahim Group for chemical supply inquiries. Located in Karachi, Pakistan. 24-hour response time.",
  keywords: ["contact Al-Ibrahim Group", "chemical supplier contact Karachi", "LED supplier contact"],
  alternates: {
    canonical: "https://alibrahimgroupofcompanies.com/contact",
  },
  openGraph: {
    title: "Contact Al-Ibrahim Group",
    description: "Get in touch for premium chemical and LED solutions.",
    url: "https://alibrahimgroupofcompanies.com/contact",
  }
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
            "url": "https://alibrahimgroupofcompanies.com/contact",
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
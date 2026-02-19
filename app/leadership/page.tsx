import { Metadata } from "next";
import LeadershipContent from "./leadership-content";

export const metadata: Metadata = {
  title: "Leadership & Values | Muhammad Ibrahim - Founder & CEO",
  description:
    "Meet Muhammad Ibrahim, founder & CEO of Al-Ibrahim Group. 21+ years experience in chemical trading. Our vision, mission, and core values driving Pakistan's chemical industry.",
  keywords: ["Muhammad Ibrahim Al-Ibrahim", "chemical company CEO Pakistan"],
  alternates: {
    canonical: "https://al-ibrahim-chemicals.vercel.app/leadership",
  },
};

export default function Leadership() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Ibrahim",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Al-Ibrahim Group",
            },
          }),
        }}
      />
      <LeadershipContent />
    </>
  );
}

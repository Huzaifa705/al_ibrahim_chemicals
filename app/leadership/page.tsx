import { Metadata } from "next";
import LeadershipContent from "./leadership-content";

export const metadata: Metadata = {
  title: "Leadership & Values | Muhammad Ibrahim",
  description:
    "Meet Muhammad Ibrahim, founder & CEO of Al-Ibrahim Group. 21+ years experience in chemical trading. Our vision, mission, and core values driving Pakistan's chemical industry.",
  keywords: ["Muhammad Ibrahim Al-Ibrahim", "chemical company CEO Pakistan", "Al-Ibrahim Group founder"],
  alternates: {
    canonical: "https://alibrahimgroupofcompanies.com/leadership",
  },
  openGraph: {
    title: "Leadership & Values | Al-Ibrahim Group",
    description: "Meet the visionary leadership driving excellence across diversified business ventures.",
    url: "https://alibrahimgroupofcompanies.com/leadership",
  }
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
            name: "Muhammad Ibrahim Peerzada",
            jobTitle: "Founder & CEO",
            url: "https://alibrahimgroupofcompanies.com/leadership",
            worksFor: {
              "@type": "Organization",
              name: "Al-Ibrahim Group",
              url: "https://alibrahimgroupofcompanies.com"
            },
          }),
        }}
      />
      <LeadershipContent />
    </>
  );
}
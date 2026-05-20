import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { Services, ProductsSection } from "@/components/site/Services";
import { Coverage } from "@/components/site/Coverage";
import { Hospitals } from "@/components/site/Hospitals";
import { ArrowRight, Phone } from "lucide-react";

const SITE_TITLE = "Koshi Gas Agency — Medical & Industrial Gas Supply, Saharsa";
const SITE_DESC = "Reliable medical and industrial gas supply, oxygen plant installation, hospital pipeline and tank commissioning across Bihar. 24×7 emergency support.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "Koshi Gas Agency, Saharsa, Bihar, medical oxygen, industrial gas, nitrogen, helium, hospital gas pipeline, oxygen plant installation, 24x7 oxygen Saharsa" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: "Saharsa" },
      { name: "geo.position", content: "25.8779;86.5985" },
      { name: "ICBM", content: "25.8779, 86.5985" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Koshi Gas Agency" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Koshi Gas Agency",
          image: "/favicon.ico",
          telephone: ["+917004879171", "+919546756767", "+918709338784"],
          email: "koshigasagency@gmail.com",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Guddu Hardware, Hatiya Gachi",
            addressLocality: "Saharsa",
            addressRegion: "Bihar",
            postalCode: "852201",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 25.8779, longitude: 86.5985 },
          areaServed: "Bihar, India",
          openingHours: "Mo-Su 00:00-23:59",
          description: SITE_DESC,
          founder: { "@type": "Person", name: "Sanjay Singh" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Trust />
      <About />
      <Services preview />
      <ProductsSection />
      <Coverage />
      <Hospitals />

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 bg-[var(--brand-navy)] text-white border-t-4 border-[var(--brand-red)]">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 14px)",
        }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Contact Now</div>
          <h2 className="mt-3 font-display font-bold uppercase text-3xl md:text-5xl leading-tight tracking-tight">
            Need supply or engineering support today?
          </h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            One call connects you to our dispatch and engineering desk — 24×7 for hospitals and industrial clients.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#b30000] transition-colors"
            >
              Send Inquiry <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="tel:7004879171"
              className="inline-flex items-center gap-2 bg-white text-[var(--brand-navy)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-secondary transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 7004879171
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

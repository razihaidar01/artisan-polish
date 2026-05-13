import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Hospitals } from "@/components/site/Hospitals";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Phone } from "lucide-react";

const SITE_TITLE = "Koshi Gas Agency — Medical & Industrial Gas Supply, Saharsa";
const SITE_DESC = "Premium medical & industrial gas supply for hospitals, laboratories and industries across Saharsa, Bihar. Oxygen, Nitrogen, Helium with 24×7 emergency service.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "Koshi Gas Agency, Saharsa, Bihar, medical oxygen, industrial gas, nitrogen, helium, hospital gas supply, ISI cylinder, 24x7 oxygen Saharsa" },
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
          areaServed: "Saharsa, Bihar",
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
      <Hospitals />

      {/* Final CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-ink text-white">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
              Talk to us today
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
              Need supply <span className="font-serif italic font-normal text-white/85">today</span>?{" "}
              We're <span className="text-gradient">one call away</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-hindi mt-5 text-base md:text-lg opacity-85 max-w-2xl mx-auto">
              अभी अपनी गैस आवश्यकता हमें बताएं — एक कॉल पर तेज़ डिलीवरी।
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-4 text-sm md:text-base font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:7004879171"
                className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-4 text-sm md:text-base font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="h-4 w-4" /> 7004879171
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

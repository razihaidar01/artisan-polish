import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ServicesAll, ProductsSection } from "@/components/site/Services";
import { Coverage } from "@/components/site/Coverage";

const TITLE = "Services — Medical Oxygen, Industrial Gas, Plant & Pipeline | Koshi Gas Agency";
const DESC = "Medical & industrial gas supply, oxygen plant installation, medical gas pipeline, ICU setup, tank commissioning, welding, cutting and refrigeration gases across Bihar.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={<>What we supply, install &amp; service.</>}
        subtitle="From a single oxygen cylinder to a full hospital gas pipeline or PSA plant — practical, documented and on time."
      />
      <ServicesAll />
      <ProductsSection />
      <Coverage />
    </Layout>
  );
}

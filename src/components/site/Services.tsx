import {
  Wind,
  FlaskConical,
  Atom,
  Stethoscope,
  HeartPulse,
  Factory,
  ArrowUpRight,
  CircleDot,
  Wrench,
  Hammer,
  Cylinder,
  Snowflake,
  PhoneCall,
  ShieldAlert,
  HardHat,
  Flame,
  Zap,
  Truck,
  Container,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Stagger, StaggerItem, Reveal } from "./Reveal";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  hindi?: string;
  desc: string;
  formula?: string;
};

export type ServiceCategory = {
  id: string;
  eyebrow: string;
  title: string;
  hindi?: string;
  intro: string;
  items: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "gas-supply",
    eyebrow: "01 · Gas supply",
    title: "Medical & industrial gas supply",
    hindi: "मेडिकल एवं इंडस्ट्रियल गैस आपूर्ति",
    intro:
      "Bulk and cylinder supply of pharmacopoeia-grade and industrial-grade gases — delivered on schedule with proper documentation.",
    items: [
      { slug: "oxygen", icon: Wind, title: "Oxygen Gas Supply", hindi: "ऑक्सीजन गैस", formula: "O₂", desc: "Medical and industrial oxygen in ISI-certified cylinders for hospitals, ICUs, home patients and workshops." },
      { slug: "nitrogen", icon: FlaskConical, title: "Nitrogen Gas Supply", hindi: "नाइट्रोजन गैस", formula: "N₂", desc: "High-purity nitrogen for laboratories, food packaging, electronics and industrial inerting applications." },
      { slug: "helium", icon: Atom, title: "Helium Gas Supply", hindi: "हीलियम", formula: "He", desc: "Reliable helium supply for MRI installations, research labs and specialty industrial work." },
      { slug: "co2", icon: CircleDot, title: "CO₂ Gas Supply", hindi: "कार्बन डाइऑक्साइड", formula: "CO₂", desc: "Food-grade and industrial CO₂ for beverages, fire systems, welding and process applications." },
    ],
  },
  {
    id: "hospital",
    eyebrow: "02 · Hospital infrastructure",
    title: "Medical gas pipeline & ICU setup",
    hindi: "मेडिकल गैस पाइपलाइन एवं ICU सेटअप",
    intro:
      "Design, installation and ongoing maintenance of hospital medical gas systems — from a single ward to a full ICU/OT block.",
    items: [
      { slug: "mgps", icon: Stethoscope, title: "Medical Gas Pipeline Installation", desc: "End-to-end MGPS design and installation for hospitals — oxygen, vacuum, nitrous oxide and compressed air lines with proper isolation and alarms." },
      { slug: "icu-setup", icon: HeartPulse, title: "ICU Setup Support", desc: "Bed-head panels, outlet points, manifolds and changeover systems for ICU and operation theatre commissioning." },
      { slug: "pipeline-maintenance", icon: Wrench, title: "Gas Pipeline Maintenance", desc: "Scheduled servicing, leak testing and AMC support for existing hospital gas pipelines." },
    ],
  },
  {
    id: "oxygen-plant",
    eyebrow: "03 · Oxygen plant",
    title: "Oxygen plant installation & service",
    hindi: "ऑक्सीजन प्लांट इंस्टॉलेशन एवं सर्विस",
    intro:
      "On-site PSA oxygen plant projects for hospitals and institutions — built to run reliably in real Indian conditions.",
    items: [
      { slug: "plant-installation", icon: Factory, title: "Oxygen Plant Installation", desc: "Turnkey PSA oxygen plant installation with civil coordination, piping, electrical and commissioning." },
      { slug: "plant-maintenance", icon: Wrench, title: "Oxygen Plant Maintenance", desc: "Annual maintenance contracts with periodic checks on compressors, sieve beds, filters and purity monitoring." },
      { slug: "plant-servicing", icon: HardHat, title: "Oxygen Plant Servicing", desc: "Breakdown response, overhauling and spare-parts servicing for existing PSA plants — including third-party units." },
    ],
  },
  {
    id: "tanks",
    eyebrow: "04 · Tanks & commissioning",
    title: "Liquid tanks — installation & commissioning",
    hindi: "लिक्विड टैंक इंस्टॉलेशन",
    intro:
      "Site survey, civil coordination, erection and commissioning of cryogenic and bulk gas tanks for hospitals and industries.",
    items: [
      { slug: "lox-tank", icon: Container, title: "Liquid Oxygen Tank Installation", desc: "Site preparation, foundation review and installation of liquid oxygen (LOX) storage tanks with vaporiser and control lines." },
      { slug: "oxygen-erection", icon: HardHat, title: "Oxygen Tank Erection & Commissioning", desc: "Mechanical erection, piping, pressure testing and commissioning of oxygen storage installations." },
      { slug: "n2-tank", icon: Container, title: "Nitrogen Tank Installation", desc: "Bulk liquid nitrogen tank installation for industrial users — including transfer lines and venting setup." },
      { slug: "co2-tank", icon: Container, title: "CO₂ Tank Installation", desc: "Bulk CO₂ storage tank installation for beverage plants, fabrication units and food processing." },
    ],
  },
  {
    id: "industrial",
    eyebrow: "05 · Industrial support",
    title: "Industrial gas, welding & cutting",
    hindi: "इंडस्ट्रियल गैस एवं वेल्डिंग सपोर्ट",
    intro:
      "Day-to-day gas, equipment and safety supply for fabrication shops, workshops and project sites.",
    items: [
      { slug: "industrial-support", icon: Factory, title: "Industrial Gas Support", desc: "Ongoing supply of oxygen, argon, nitrogen and gas mixtures for fabrication, manufacturing and project sites." },
      { slug: "welding-gas", icon: Zap, title: "Welding Gas Supply", desc: "Argon, CO₂ and mixed welding gases in standard cylinders — with bulk pricing for ongoing projects." },
      { slug: "cutting-gas", icon: Flame, title: "Cutting Gas Supply", desc: "DA (dissolved acetylene), LPG and oxygen for gas cutting — supplied in tested, ISI-certified cylinders." },
      { slug: "carbide-tank", icon: Cylinder, title: "Carbide Tank", desc: "Calcium carbide supply and carbide tank servicing for acetylene generation in fabrication units." },
      { slug: "gas-cutter", icon: Flame, title: "Gas Cutter Equipment", desc: "Cutting torches, nozzles, regulators and hoses — practical equipment for everyday workshop use." },
      { slug: "welding-equipment", icon: Hammer, title: "Welding Equipment", desc: "Welding holders, regulators, flashback arrestors and consumables — sourced from established Indian brands." },
      { slug: "safety-equipment", icon: ShieldAlert, title: "Industrial Safety Equipment", desc: "Helmets, gloves, goggles, aprons and fire safety items for workshops and industrial sites." },
    ],
  },
  {
    id: "refrigeration",
    eyebrow: "06 · Refrigeration",
    title: "Refrigeration & AC gas",
    hindi: "रेफ्रिजरेशन एवं AC गैस",
    intro:
      "Refrigerant supply and refilling support for service technicians, AC dealers and cold-storage units.",
    items: [
      { slug: "refrigeration-gas", icon: Snowflake, title: "Refrigeration Gas", desc: "Common refrigerants supplied in original packaging for service contractors and cold-storage operators." },
      { slug: "ac-gas", icon: Snowflake, title: "AC Gas Refilling", desc: "AC gas supply for technicians handling home, commercial and automotive AC servicing." },
      { slug: "fridge-gas", icon: Snowflake, title: "Fridge Gas Supply", desc: "Refrigerant supply for fridge repair technicians — small-quantity packs available." },
    ],
  },
  {
    id: "emergency",
    eyebrow: "07 · Emergency",
    title: "Emergency cylinder support",
    hindi: "इमरजेंसी सिलेंडर सपोर्ट",
    intro:
      "A dedicated emergency desk for hospitals and critical patients — because oxygen cannot wait.",
    items: [
      { slug: "emergency-cylinder", icon: PhoneCall, title: "Emergency Cylinder Support", desc: "24×7 emergency dispatch of medical oxygen cylinders for hospitals and home patients across Saharsa and nearby districts." },
      { slug: "priority-dispatch", icon: Truck, title: "Priority Hospital Dispatch", desc: "Standing arrangement for partner hospitals — priority refill and delivery during peak demand." },
    ],
  },
];

// Flat list for preview / SEO sitemap-style consumption
export const services: Service[] = serviceCategories.flatMap((c) => c.items);

// ---------- Realistic photo placeholder ----------
function ImagePlaceholder({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border bg-[oklch(0.96_0.01_240)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.94_0.015_240)_0%,oklch(0.98_0.005_240)_50%,oklch(0.93_0.02_220)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground/55 bg-white/70 rounded-full px-2 py-1">
          Photo · to be replaced
        </span>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/55">{label}</div>
          {hint && <div className="text-[10px] text-foreground/40 mt-0.5">{hint}</div>}
        </div>
      </div>
    </div>
  );
}

// ---------- Preview (home page) ----------
export function Services({ preview = false }: { preview?: boolean }) {
  const items = preview ? services.slice(0, 6) : services;
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-trust pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">What we deliver</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.05]">
                Specialty gases and on-site support for{" "}
                <span className="font-serif italic font-normal">hospitals</span> &amp; industry.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-muted-foreground max-w-sm font-hindi">
              अस्पतालों, लैब और उद्योगों के लिए सम्पूर्ण गैस समाधान — एक भरोसेमंद साझेदार।
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((s) => (
            <StaggerItem key={s.slug}>
              <article className="group relative h-full rounded-3xl bg-white ring-1 ring-border p-6 md:p-7 hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  {s.formula && (
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {s.formula}
                    </span>
                  )}
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-foreground text-xl tracking-tight">{s.title}</h3>
                  {s.hindi && <div className="font-hindi text-sm text-muted-foreground mt-1">{s.hindi}</div>}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {preview && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-border px-6 py-3 text-sm font-semibold text-foreground hover:shadow-soft transition-all"
            >
              View the full services list
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Full categorized list (services page) ----------
export function ServicesAll() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20 md:space-y-28">
        {serviceCategories.map((cat, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <Reveal key={cat.id}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
                <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {cat.eyebrow}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1] text-balance">
                    {cat.title}
                  </h2>
                  {cat.hindi && <div className="font-hindi text-base text-muted-foreground mt-2">{cat.hindi}</div>}
                  <p className="mt-4 text-muted-foreground leading-relaxed text-pretty max-w-md">
                    {cat.intro}
                  </p>
                  <div className="mt-6">
                    <ImagePlaceholder label={cat.title} hint="Replace with on-site / field photo" />
                  </div>
                </div>
                <div className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`}>
                  <ul className="divide-y divide-border border-y border-border">
                    {cat.items.map((s, i) => (
                      <li key={s.slug} className="py-5 grid grid-cols-[auto_1fr_auto] items-start gap-4">
                        <div className="h-10 w-10 rounded-xl bg-secondary ring-1 ring-border flex items-center justify-center text-foreground/80">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <h3 className="text-base md:text-lg font-semibold text-foreground tracking-tight">
                              {s.title}
                            </h3>
                            {s.hindi && (
                              <span className="font-hindi text-xs text-muted-foreground">{s.hindi}</span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed text-pretty">
                            {s.desc}
                          </p>
                        </div>
                        <div className="hidden sm:flex flex-col items-end gap-1 pt-1">
                          {s.formula && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                              {s.formula}
                            </span>
                          )}
                          <span className="font-mono text-[10px] text-foreground/30 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

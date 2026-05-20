import {
  Wind, FlaskConical, Atom, Stethoscope, HeartPulse, Factory, CircleDot,
  Wrench, Cylinder, Snowflake, PhoneCall, ShieldAlert, HardHat, Flame, Zap,
  Truck, Container, ImageIcon, ArrowRight, type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Stagger, StaggerItem, Reveal } from "./Reveal";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  placeholder: string;
};

export type ServiceCategory = {
  id: string;
  no: string;
  title: string;
  intro: string;
  items: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "medical-gas",
    no: "01",
    title: "Medical Gas Services",
    intro: "Reliable medical-grade gas supply and hospital infrastructure support for ICUs, operation theatres, wards and home patients.",
    items: [
      { slug: "oxygen", icon: Wind, title: "Oxygen Gas Supply",
        desc: "Medical-grade oxygen supply for hospitals, ICUs and home patients in ISI-certified cylinders.",
        bullets: ["Pharmacopoeia-grade O₂", "ISI-certified cylinders", "Scheduled & emergency delivery"],
        placeholder: "Indian Oxygen Cylinder Image" },
      { slug: "icu-pipeline", icon: HeartPulse, title: "ICU Pipeline Setup",
        desc: "Bed-head panels, outlets and changeover systems for ICU and operation theatre commissioning.",
        bullets: ["Bed-head panel installation", "Alarm & isolation valves", "Commissioning support"],
        placeholder: "ICU Pipeline Installation" },
      { slug: "mgps", icon: Stethoscope, title: "Medical Gas Pipeline",
        desc: "Turnkey MGPS design and installation for oxygen, vacuum, N₂O and compressed air lines.",
        bullets: ["Hospital MGPS design", "Pressure testing & validation", "Maintenance contracts"],
        placeholder: "Hospital Medical Gas Pipeline" },
      { slug: "emergency-cylinder", icon: PhoneCall, title: "Emergency Cylinder Support",
        desc: "24×7 dispatch of medical oxygen cylinders for hospitals and home patients across the region.",
        bullets: ["24×7 emergency desk", "Priority hospital dispatch", "Same-day refill"],
        placeholder: "Emergency Oxygen Supply" },
      { slug: "hospital-support", icon: Truck, title: "Hospital Gas Support",
        desc: "Standing supply arrangement for hospitals — predictable refill cycles and on-call response.",
        bullets: ["Standing supply contracts", "Documented dispatch", "Dedicated coordinator"],
        placeholder: "Hospital Oxygen Supply" },
      { slug: "plant-install", icon: Factory, title: "Oxygen Plant Installation",
        desc: "Turnkey PSA oxygen plant installation with civil coordination, piping, electrical and commissioning.",
        bullets: ["PSA plant turnkey", "Site & civil coordination", "Commissioning & handover"],
        placeholder: "Oxygen Plant Installation" },
      { slug: "plant-maintenance", icon: Wrench, title: "Oxygen Plant Maintenance",
        desc: "Annual maintenance contracts with periodic compressor, sieve-bed and purity checks.",
        bullets: ["AMC support", "Sieve-bed servicing", "Purity monitoring"],
        placeholder: "Oxygen Plant Maintenance" },
      { slug: "icu-maintenance", icon: HardHat, title: "ICU Maintenance & Servicing",
        desc: "Scheduled servicing and breakdown response for installed ICU gas systems.",
        bullets: ["Scheduled servicing", "Breakdown response", "Spare-parts support"],
        placeholder: "ICU Maintenance" },
    ],
  },
  {
    id: "industrial-gas",
    no: "02",
    title: "Industrial Gas Services",
    intro: "Day-to-day gas, equipment and safety supply for fabrication shops, workshops and industrial project sites.",
    items: [
      { slug: "nitrogen", icon: FlaskConical, title: "Nitrogen Gas Supply",
        desc: "High-purity nitrogen for laboratories, food packaging, electronics and inerting applications.",
        bullets: ["High-purity N₂", "Cylinder & bulk", "Lab & industrial grade"],
        placeholder: "Nitrogen Tank Installation" },
      { slug: "helium", icon: Atom, title: "Helium Gas Supply",
        desc: "Reliable helium for MRI installations, research labs and specialty industrial use.",
        bullets: ["MRI-grade He", "Lab supply", "Specialty applications"],
        placeholder: "Helium Cylinder Supply" },
      { slug: "co2", icon: CircleDot, title: "CO₂ Gas Supply",
        desc: "Food-grade and industrial CO₂ for beverages, fire systems, welding and process use.",
        bullets: ["Food & industrial grade", "Cylinder & bulk", "Beverage plant supply"],
        placeholder: "CO₂ Cylinder Storage" },
      { slug: "welding-gas", icon: Zap, title: "Welding Gas",
        desc: "Argon, CO₂ and mixed welding gases in standard cylinders with bulk pricing for project work.",
        bullets: ["Argon, CO₂, mixtures", "Bulk pricing", "Project-site delivery"],
        placeholder: "Welding Gas Equipment" },
      { slug: "cutting-gas", icon: Flame, title: "Cutting Gas",
        desc: "DA (acetylene), LPG and oxygen for gas cutting in tested, ISI-certified cylinders.",
        bullets: ["DA, LPG, O₂", "Tested cylinders", "Workshop & site supply"],
        placeholder: "Gas Cutting Setup" },
      { slug: "carbide-tank", icon: Cylinder, title: "Carbide Tank",
        desc: "Calcium carbide supply and tank servicing for acetylene generation in fabrication units.",
        bullets: ["Calcium carbide supply", "Tank servicing", "Acetylene generation"],
        placeholder: "Carbide Tank" },
      { slug: "gas-cutter", icon: Flame, title: "Gas Cutter Equipment",
        desc: "Cutting torches, nozzles, regulators and hoses for everyday workshop use.",
        bullets: ["Torches & nozzles", "Regulators & hoses", "Indian-brand sourcing"],
        placeholder: "Gas Cutter Equipment" },
      { slug: "safety", icon: ShieldAlert, title: "Industrial Safety Equipment",
        desc: "Helmets, gloves, goggles, aprons and fire-safety items for workshops and project sites.",
        bullets: ["PPE & fire safety", "Workshop kits", "Bulk supply"],
        placeholder: "Industrial Safety Equipment" },
    ],
  },
  {
    id: "refrigeration",
    no: "03",
    title: "Refrigeration Gas",
    intro: "Refrigerant supply and refilling support for service technicians, AC dealers and cold-storage units.",
    items: [
      { slug: "ac-gas", icon: Snowflake, title: "AC Gas",
        desc: "AC gas supply for technicians handling home, commercial and automotive AC servicing.",
        bullets: ["Home, commercial, auto AC", "Original packaging", "Technician supply"],
        placeholder: "AC Refrigerant Cylinder" },
      { slug: "fridge-gas", icon: Snowflake, title: "Fridge Gas",
        desc: "Refrigerant supply for fridge repair technicians — small-quantity packs available.",
        bullets: ["Small packs", "Technician-friendly", "Common refrigerants"],
        placeholder: "Fridge Gas Supply" },
      { slug: "cooling-gas", icon: Snowflake, title: "Cooling Gas Supply",
        desc: "Refrigerant supply for cold-storage units and commercial cooling installations.",
        bullets: ["Cold-storage support", "Commercial cooling", "Bulk supply"],
        placeholder: "Refrigeration Gas Support" },
    ],
  },
  {
    id: "engineering",
    no: "04",
    title: "Engineering & Installation",
    intro: "On-site engineering, erection and commissioning support — from a single tank to a full PSA plant.",
    items: [
      { slug: "plant-erection", icon: HardHat, title: "Oxygen Plant Erection",
        desc: "Mechanical erection, piping, pressure testing and commissioning of oxygen plants.",
        bullets: ["Mechanical erection", "Piping & testing", "Commissioning"],
        placeholder: "Oxygen Plant Erection" },
      { slug: "tank-install", icon: Container, title: "Tank Installation & Commissioning",
        desc: "Site survey, civil coordination, erection and commissioning of cryogenic and bulk gas tanks.",
        bullets: ["Site survey", "Civil coordination", "Pressure testing"],
        placeholder: "Liquid Oxygen Tank Setup" },
      { slug: "lox-tank", icon: Container, title: "Liquid Oxygen Tank Setup",
        desc: "Foundation review and installation of LOX storage tanks with vaporiser and control lines.",
        bullets: ["LOX storage", "Vaporiser & controls", "Hospital & industrial"],
        placeholder: "Liquid Oxygen Tank Installation" },
      { slug: "plant-servicing", icon: Wrench, title: "Oxygen Plant Servicing",
        desc: "Breakdown response, overhauling and spare-parts servicing — including third-party plants.",
        bullets: ["Breakdown response", "Overhauling", "Spare parts"],
        placeholder: "Oxygen Plant Servicing" },
      { slug: "pipeline-maintenance", icon: Wrench, title: "Pipeline Maintenance",
        desc: "Scheduled servicing, leak testing and AMC support for hospital and industrial gas pipelines.",
        bullets: ["Leak testing", "AMC support", "Scheduled servicing"],
        placeholder: "Pipeline Maintenance" },
      { slug: "industrial-install", icon: Factory, title: "Industrial Installation Support",
        desc: "Project-based installation support for industrial gas systems and fabrication units.",
        bullets: ["Project support", "Industrial gas systems", "Multi-state work"],
        placeholder: "Industrial Engineering Work" },
      { slug: "n2-tank", icon: Container, title: "Nitrogen Tank Installation",
        desc: "Bulk liquid nitrogen tank installation including transfer lines and venting setup.",
        bullets: ["Bulk N₂ storage", "Transfer lines", "Venting setup"],
        placeholder: "Nitrogen Tank Installation" },
      { slug: "co2-tank", icon: Container, title: "CO₂ Tank Installation",
        desc: "Bulk CO₂ storage tank installation for beverage plants, fabrication units and food processing.",
        bullets: ["Bulk CO₂ tanks", "Beverage & food plants", "Commissioning"],
        placeholder: "CO₂ Tank Installation" },
    ],
  },
];

export const services: Service[] = serviceCategories.flatMap((c) => c.items);

// ---------- Industrial placeholder image block ----------
function ServiceImage({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden bg-secondary border-b border-border`}>
      <div className="absolute inset-0 opacity-25" style={{
        backgroundImage: "repeating-linear-gradient(45deg, rgba(0,51,102,0.12) 0, rgba(0,51,102,0.12) 1px, transparent 1px, transparent 12px)",
      }} />
      <div className="absolute inset-0 flex items-center justify-center px-3">
        <div className="text-center">
          <ImageIcon className="h-7 w-7 mx-auto text-foreground/40" strokeWidth={1.2} />
          <div className="mt-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-foreground/45">[REPLACE]</div>
          <div className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)] leading-tight max-w-[180px] mx-auto">{label}</div>
        </div>
      </div>
    </div>
  );
}

// ---------- Service card ----------
function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="group flex flex-col border border-border bg-white hover:shadow-elegant transition-shadow h-full">
      <ServiceImage label={s.placeholder} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 bg-[var(--brand-navy)] text-white flex items-center justify-center shrink-0">
            <s.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display font-bold uppercase text-[15px] leading-tight text-[var(--brand-navy)] tracking-tight">
            {s.title}
          </h3>
        </div>
        <p className="mt-3 text-[13px] text-foreground/70 leading-relaxed">{s.desc}</p>
        <ul className="mt-3 space-y-1.5">
          {s.bullets.map((b) => (
            <li key={b} className="text-[12px] text-foreground/75 flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 bg-[var(--brand-red)] shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand-navy)] hover:text-[var(--brand-red)] transition-colors"
          >
            Send Inquiry <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ---------- Preview (home page) ----------
export function Services({ preview = false }: { preview?: boolean }) {
  const items = preview ? services.slice(0, 6) : services;
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Our Services</div>
            <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
              Medical &amp; Industrial Gas — supply, installation, support.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Practical, documented services delivered with engineering discipline — for hospitals, industries and institutional clients.
            </p>
          </div>
          {preview && (
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-[var(--brand-navy)] text-[var(--brand-navy)] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[var(--brand-navy)] hover:text-white transition-colors"
            >
              View All Services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceCard s={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ---------- Full categorized list (services page) ----------
export function ServicesAll() {
  return (
    <section className="relative py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16 md:space-y-24">
        {serviceCategories.map((cat) => (
          <Reveal key={cat.id}>
            <article id={cat.id}>
              <div className="flex items-end justify-between border-b-2 border-[var(--brand-navy)] pb-4 mb-8">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-red)]">Category {cat.no}</div>
                  <h2 className="mt-1.5 font-display font-bold uppercase text-2xl md:text-3xl text-[var(--brand-navy)] tracking-tight">
                    {cat.title}
                  </h2>
                </div>
                <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                  {String(cat.items.length).padStart(2, "0")} services
                </span>
              </div>
              <p className="text-foreground/75 max-w-3xl mb-8 text-pretty">{cat.intro}</p>
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((s) => (
                  <StaggerItem key={s.slug}>
                    <ServiceCard s={s} />
                  </StaggerItem>
                ))}
              </Stagger>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------- Products & Equipment ----------
const products = [
  { name: "Carbide Tank", desc: "Calcium carbide supply and tank servicing.", placeholder: "Carbide Tank" },
  { name: "Gas Cutter", desc: "Cutting torches, nozzles and accessories.", placeholder: "Gas Cutter Equipment" },
  { name: "Welding Equipment", desc: "Holders, regulators, flashback arrestors, consumables.", placeholder: "Welding Equipment" },
  { name: "Industrial Gas Equipment", desc: "Regulators, hoses, flow meters and fittings.", placeholder: "Industrial Gas Equipment" },
  { name: "Cylinder Accessories", desc: "Valves, caps, trolleys and refill fittings.", placeholder: "Cylinder Accessories" },
  { name: "Safety Equipment", desc: "Helmets, gloves, goggles, aprons, fire safety.", placeholder: "Industrial Safety Equipment" },
  { name: "Refrigeration Gas Support", desc: "Refrigerants for cold storage and commercial cooling.", placeholder: "Refrigeration Gas Support" },
  { name: "AC Gas Support", desc: "AC refrigerants for service technicians.", placeholder: "AC Gas Refilling" },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Products &amp; Equipment</div>
          <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
            Industrial equipment, cylinders &amp; accessories.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Sourced from established Indian brands. Available in standard packs for workshops, technicians and project sites.
          </p>
        </div>
        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <article className="bg-white border border-border flex flex-col h-full hover:shadow-elegant transition-shadow">
                <ServiceImage label={p.placeholder} ratio="aspect-square" />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display font-bold uppercase text-[13px] text-[var(--brand-navy)] tracking-tight">{p.name}</h3>
                  <p className="mt-1.5 text-[12px] text-foreground/70 leading-relaxed">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-auto pt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--brand-navy)] hover:text-[var(--brand-red)] transition-colors"
                  >
                    Inquire <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

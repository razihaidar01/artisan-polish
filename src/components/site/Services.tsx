import { Wind, FlaskConical, Atom, Stethoscope, HeartPulse, Factory, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Stagger, StaggerItem, Reveal } from "./Reveal";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  hindi: string;
  short: string;
  long: string;
  highlights: string[];
  formula?: string;
};

export const services: Service[] = [
  {
    slug: "oxygen",
    icon: Wind,
    title: "Medical Oxygen",
    hindi: "ऑक्सीजन गैस सप्लाई",
    formula: "O₂",
    short: "Pharmacopoeia-grade O₂ for hospitals, ICUs and home care.",
    long: "Pharmacopoeia-grade medical oxygen for hospitals, intensive care units and home patients across Saharsa. Every cylinder is ISI-certified, leak-tested and tracked — backed by 24×7 emergency refill response.",
    highlights: ["99.5% medical purity", "ISI-certified cylinders", "Emergency refill"],
  },
  {
    slug: "nitrogen",
    icon: FlaskConical,
    title: "Industrial Nitrogen",
    hindi: "नाइट्रोजन गैस",
    formula: "N₂",
    short: "High-purity N₂ for laboratories, food packaging and electronics.",
    long: "High-purity nitrogen for laboratories, food packaging, electronics manufacturing and industrial processes — available in cylinders and bulk, with safe transport and on-site handover.",
    highlights: ["High-purity grade", "Lab & industrial use", "Bulk supply"],
  },
  {
    slug: "helium",
    icon: Atom,
    title: "Helium",
    hindi: "हीलियम गैस",
    formula: "He",
    short: "Research, MRI and specialty applications — sourced reliably.",
    long: "Reliable helium supply for MRI machines, research laboratories and specialty industrial applications. We guarantee secure transport and consistent availability even during regional shortages.",
    highlights: ["MRI & research grade", "Secure transport", "Reliable availability"],
  },
  {
    slug: "medical-gas",
    icon: Stethoscope,
    title: "Hospital Medical Gas",
    hindi: "मेडिकल गैस सेवा",
    short: "Complete medical gas program for ICU, OT and wards.",
    long: "End-to-end medical gas program for ICUs, operating theatres and general wards — including oxygen, nitrous oxide and specialty mixtures, with trained delivery and installation support.",
    highlights: ["ICU & OT grade", "Trained delivery team", "Periodic safety audits"],
  },
  {
    slug: "hospital-support",
    icon: HeartPulse,
    title: "Hospital Support",
    hindi: "अस्पताल सपोर्ट",
    short: "24×7 emergency response and managed cylinder inventory.",
    long: "Dedicated 24×7 emergency response and priority dispatch for hospitals — including managed cylinder inventory, refill tracking and uninterrupted supply commitments under SLA.",
    highlights: ["24×7 response", "Priority dispatch", "Cylinder management"],
  },
  {
    slug: "industrial",
    icon: Factory,
    title: "Industrial Gas Supply",
    hindi: "इंडस्ट्रियल गैस",
    short: "Welding, cutting and manufacturing gases — bulk and on-time.",
    long: "Reliable supply of oxygen, argon, CO₂ and custom gas mixtures for welding, cutting, fabrication and manufacturing industries — with bulk-order pricing and on-time delivery guarantees.",
    highlights: ["Welding & cutting grade", "Bulk order support", "On-time delivery"],
  },
];

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
                Specialty gases for{" "}
                <span className="font-serif italic font-normal">care</span>,{" "}
                research &amp; <span className="text-gradient">industry</span>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-muted-foreground max-w-sm font-hindi">
              अस्पतालों, लैब और उद्योगों के लिए सम्पूर्ण गैस समाधान — एक भरोसेमंद साझेदार।
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {items.map((s, i) => {
            const span =
              i === 0 ? "md:col-span-3 md:row-span-2" :
              i === 1 ? "md:col-span-3" :
              i === 2 ? "md:col-span-2" :
              i === 3 ? "md:col-span-2" :
              i === 4 ? "md:col-span-2" :
              "md:col-span-6";
            const isFeature = i === 0;
            return (
              <StaggerItem key={s.slug} className={span}>
                <article className={`group relative h-full rounded-3xl bg-white ring-1 ring-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 overflow-hidden ${isFeature ? "p-7 md:p-9" : "p-6 md:p-7"}`}>
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-mesh opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500" />
                  <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                  <div className="relative flex items-start justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
                      <s.icon className="h-5 w-5" />
                    </div>
                    {s.formula && (
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">
                        {s.formula}
                      </span>
                    )}
                  </div>

                  <div className="relative mt-6">
                    <h3 className={`font-bold text-foreground tracking-tight ${isFeature ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {s.title}
                    </h3>
                    <div className="font-hindi text-sm text-muted-foreground mt-1">{s.hindi}</div>
                    <p className={`mt-3 text-muted-foreground leading-relaxed text-pretty ${isFeature ? "text-base md:text-lg" : "text-sm"}`}>
                      {isFeature ? s.long : s.short}
                    </p>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {s.highlights.map((h) => (
                      <span key={h} className="text-[11px] uppercase tracking-wider text-foreground/70 bg-secondary/70 ring-1 ring-border rounded-full px-2.5 py-1">
                        {h}
                      </span>
                    ))}
                  </div>

                  {isFeature && (
                    <div className="relative mt-6">
                      <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link">
                        Explore full lineup
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {preview && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white transition-colors"
            >
              View all services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

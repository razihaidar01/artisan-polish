import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-[var(--brand-navy)] text-white border-b-4 border-[var(--brand-red)] overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 14px)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-white/60">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{eyebrow}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display font-bold uppercase text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl text-pretty">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-2.5">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

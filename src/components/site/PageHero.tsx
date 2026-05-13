import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

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
    <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.3] mix-blend-multiply pointer-events-none" />
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-mesh blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -right-20 h-[26rem] w-[26rem] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-semibold text-primary uppercase tracking-[0.18em] shadow-soft">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground text-balance tracking-tight">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

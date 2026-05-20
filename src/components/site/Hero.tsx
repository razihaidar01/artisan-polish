import { Phone, MessageCircle, ShieldCheck, Headphones, Truck, ArrowRight, ImageIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-white border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT: Copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-navy)]">
              <span className="h-1.5 w-1.5 bg-[var(--brand-red)]" />
              Saharsa, Bihar · Est. Industrial Supplier
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display font-bold uppercase text-[2.1rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-[var(--brand-navy)] text-balance">
              Reliable Medical &amp; Industrial Gas Solutions
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
              Trusted supply and engineering support for hospitals, laboratories, fabrication units, industries and institutional operations across Bihar.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-hindi mt-3 text-sm md:text-base text-muted-foreground max-w-xl">
              अस्पतालों, उद्योगों एवं संस्थानों के लिए भरोसेमंद मेडिकल और इंडस्ट्रियल गैस सेवा।
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#b30000] transition-colors"
              >
                Request Support <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--brand-navy)] text-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[var(--primary)] transition-colors"
              >
                Get Quote
              </Link>
              <a
                href="tel:7004879171"
                className="inline-flex items-center gap-2 border border-border bg-white text-[var(--brand-navy)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-secondary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" /> Contact Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--brand-navy)]" /> 24×7 Support</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-[var(--brand-navy)]" /> Safe Supply</div>
              <div className="flex items-center gap-2"><Headphones className="h-4 w-4 text-[var(--brand-navy)]" /> Trusted Service Network</div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: Industrial image placeholder */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-[var(--brand-navy)]">
                {/* Industrial pattern atmosphere */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 14px)",
                }} />
                {/* Dark blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-navy)]/95 via-[var(--brand-navy)]/70 to-transparent" />
                {/* Placeholder marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-white/70">
                    <ImageIcon className="h-10 w-10" strokeWidth={1.2} />
                    <div className="text-center px-4">
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/55">Image · to be replaced</div>
                      <div className="mt-1 text-sm font-semibold uppercase tracking-[0.08em]">Indian Industrial Gas Plant<br/>or Oxygen Cylinder Warehouse</div>
                    </div>
                  </div>
                </div>
                {/* Corner badge */}
                <div className="absolute top-4 left-4 bg-white text-[var(--brand-navy)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] border border-white">
                  O₂ · 99.5% Pure
                </div>
                {/* Bottom spec strip */}
                <div className="absolute bottom-0 inset-x-0 bg-black/40 backdrop-blur-sm px-4 py-3 flex items-center justify-between text-white text-[11px] font-mono uppercase tracking-[0.14em]">
                  <span>ISI Certified</span>
                  <span className="text-white/60">|</span>
                  <span>10+ Years</span>
                  <span className="text-white/60">|</span>
                  <span>5000+ Deliveries</span>
                </div>
              </div>

              {/* WhatsApp pill below image */}
              <a
                href="https://wa.me/917004879171"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#16794a] hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp · +91 7004879171
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Phone, MessageCircle, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import owner from "@/assets/owner-hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={ref} id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden bg-gradient-hero">
      {/* grid + noise atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.35] mix-blend-multiply pointer-events-none" />

      {/* mesh blobs */}
      <motion.div style={{ y: yBlobA }} className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-mesh blur-3xl opacity-70 pointer-events-none" />
      <motion.div style={{ y: yBlobB }} className="absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-primary-glow/25 blur-3xl pointer-events-none" />

      <motion.div style={{ opacity: opacityFade }} className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 relative z-10">
          <Reveal as="div">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-semibold text-primary uppercase tracking-[0.18em] shadow-soft">
              <span className="relative h-1.5 w-1.5 rounded-full bg-success animate-pulse-ring text-success" />
              Saharsa · Bihar
              <span className="text-muted-foreground/60">·</span>
              <span className="font-hindi normal-case tracking-normal text-foreground/70">मेडिकल & इंडस्ट्रियल गैस</span>
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight font-bold text-foreground text-balance">
              <span className="font-serif italic font-normal text-foreground/90">Trusted</span>{" "}
              medical &{" "}
              <span className="text-gradient">industrial</span>
              <br />
              gas, delivered with care.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-hindi mt-5 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              सहारसा की भरोसेमंद मेडिकल एवं इंडस्ट्रियल गैस सेवा।
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
              Premium gas solutions for hospitals, laboratories, institutions and industries across Bihar — with 24×7 emergency response.
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm md:text-base font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Contact Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/917004879171"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass text-foreground px-6 py-3.5 text-sm md:text-base font-semibold hover:bg-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[oklch(0.55_0.18_155)]" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.44}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> ISI-certified cylinders</div>
              <div className="hidden sm:flex items-center gap-2"><Activity className="h-4 w-4 text-primary" /> 24×7 emergency desk</div>
              <div className="flex items-center gap-2 font-hindi"><span className="h-1 w-1 rounded-full bg-primary" /> 5000+ सप्लाई पूरी</div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 relative">
          {/* glow halo */}
          <div className="absolute -inset-6 -z-10 bg-gradient-primary opacity-25 blur-3xl rounded-[3rem]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ y: yImg }}
            className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/40 shadow-elegant bg-white"
          >
            <img
              src={owner}
              alt="Sanjay Singh — Founder, Koshi Gas Agency, with industrial oxygen cylinders"
              className="w-full h-auto object-cover"
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent pointer-events-none" />

            {/* floating spec card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-4 left-4 glass rounded-2xl px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-foreground shadow-soft"
            >
              <div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-success" /> O₂ · 99.5% pure</div>
            </motion.div>
          </motion.div>

          {/* owner card overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-7 left-4 right-4 md:-bottom-8 md:left-6 md:right-6 glass rounded-2xl px-4 py-3.5 md:px-5 md:py-4 flex items-center justify-between shadow-elegant"
          >
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Founder</div>
              <div className="font-semibold text-foreground text-sm md:text-base truncate">Sanjay Singh</div>
              <div className="font-hindi text-[11px] text-muted-foreground mt-0.5">मालिक · Koshi Gas Agency</div>
            </div>
            <a href="tel:7004879171" className="rounded-full bg-gradient-primary text-primary-foreground p-3 shadow-soft hover:shadow-glow transition-shadow shrink-0" aria-label="Call founder">
              <Phone className="h-4 w-4" />
            </a>
          </motion.div>

          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -top-6 -right-4 glass rounded-2xl px-4 py-3 shadow-elegant items-center gap-3"
          >
            <div className="font-display text-3xl font-bold text-gradient leading-none">10+</div>
            <div className="text-[11px] leading-tight text-muted-foreground">Years<br />of Trust</div>
          </motion.div>
        </div>
      </motion.div>

      {/* trusted-by strip */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 mt-20 md:mt-28">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center">
          Supplying hospitals, nursing homes &amp; doctors across Saharsa &amp; Kosi region
        </div>
        <div className="mt-5 marquee-mask overflow-hidden">
          <div className="flex gap-10 md:gap-16 animate-marquee whitespace-nowrap text-foreground/40">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-10 md:gap-16 shrink-0">
                {["Surya Hospital", "Madhav Hospital", "Kiran Aditya Hospital", "Cure Hospital", "Parvati Hospital", "Dev Hospital", "Satyam Hospital", "Vaishnavi Nursing Home", "Aarog Mandir Hospital"].map((n) => (
                  <span key={n + k} className="font-display text-lg md:text-2xl font-semibold tracking-tight">{n}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

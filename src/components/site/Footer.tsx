import logo from "@/assets/kga-logo.png";
import { Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-gradient-ink text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        {/* CTA strip */}
        <div className="grid md:grid-cols-2 gap-6 items-end pb-12 md:pb-16 border-b border-white/10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">Get in touch</div>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
              Let's keep your <span className="font-serif italic font-normal text-white/85">supply</span> running.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="tel:7004879171"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3.5 text-sm font-semibold hover:shadow-glow transition-shadow"
            >
              <Phone className="h-4 w-4" /> 7004879171
            </a>
            <a
              href="https://wa.me/917004879171"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Cols */}
        <div className="grid md:grid-cols-12 gap-10 mt-12 md:mt-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5 flex items-center justify-center">
                <img src={logo} alt="KGA" className="h-full w-auto object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg tracking-tight">Koshi Gas Agency</div>
                <div className="text-xs opacity-70">Your Trust, Our Energy</div>
              </div>
            </div>
            <p className="mt-5 text-sm opacity-80 max-w-md leading-relaxed">
              Medical and industrial gas supply for hospitals, laboratories and industries across Saharsa and the Kosi region.
            </p>
            <p className="font-hindi mt-2 text-sm opacity-70 max-w-md">
              सहारसा की भरोसेमंद मेडिकल एवं इंडस्ट्रियल गैस सेवा।
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Navigate</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="opacity-85 hover:opacity-100 hover:underline">Home</Link></li>
              <li><Link to="/about" className="opacity-85 hover:opacity-100 hover:underline">About</Link></li>
              <li><Link to="/services" className="opacity-85 hover:opacity-100 hover:underline">Services</Link></li>
              <li><Link to="/contact" className="opacity-85 hover:opacity-100 hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">Reach us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-85"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Hatiya Gachi, Saharsa, Bihar – 852201</li>
              <li className="flex items-center gap-2 opacity-85"><Phone className="h-4 w-4" /> <a href="tel:7004879171" className="hover:underline">7004879171</a> · <a href="tel:9546756767" className="hover:underline">9546756767</a> · <a href="tel:8709338784" className="hover:underline">8709338784</a></li>
              <li className="text-xs opacity-70 mt-3">Founder · Sanjay Singh <span className="font-hindi">(मालिक)</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs opacity-70">
          <div>© {new Date().getFullYear()} Koshi Gas Agency. All rights reserved.</div>
          <div>
            Designed &amp; Managed by{" "}
            <a href="https://siat.in/rhsoftware" target="_blank" rel="noreferrer" className="font-semibold underline hover:no-underline">
              RH Software
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import logo from "@/assets/kga-logo.png";
import { Phone, MapPin, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        {/* CTA strip */}
        <div className="grid md:grid-cols-2 gap-6 items-end pb-10 md:pb-14 border-b border-white/15">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Talk To Us</div>
            <h2 className="mt-3 font-display font-bold uppercase text-3xl md:text-4xl leading-tight tracking-tight">
              Need supply or engineering support?
            </h2>
            <p className="mt-2 text-white/70 text-sm max-w-md">
              Reach us directly — we respond fast to hospital, industrial and emergency inquiries.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 md:justify-end">
            <a
              href="tel:7004879171"
              className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#b30000] transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 7004879171
            </a>
            <a
              href="https://wa.me/917004879171"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[var(--brand-navy)] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-12 gap-10 mt-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white p-1.5 flex items-center justify-center">
                <img src={logo} alt="KGA" className="h-full w-auto object-contain" />
              </div>
              <div>
                <div className="font-display font-bold uppercase text-lg tracking-tight">Koshi Gas Agency</div>
                <div className="text-[11px] uppercase tracking-[0.12em] opacity-70">Medical &amp; Industrial Gas</div>
              </div>
            </div>
            <p className="mt-5 text-sm opacity-80 max-w-md leading-relaxed">
              Medical and industrial gas supply, oxygen plant installation, pipeline and tank commissioning across Bihar.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-4 font-bold">Navigate</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="opacity-85 hover:opacity-100 hover:underline">Home</Link></li>
              <li><Link to="/about" className="opacity-85 hover:opacity-100 hover:underline">About Us</Link></li>
              <li><Link to="/services" className="opacity-85 hover:opacity-100 hover:underline">Services</Link></li>
              <li><Link to="/services" hash="products" className="opacity-85 hover:opacity-100 hover:underline">Products</Link></li>
              <li><Link to="/contact" className="opacity-85 hover:opacity-100 hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 mb-4 font-bold">Reach Us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-85"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Near Guddu Hardware, Hatiya Gachi, Saharsa, Bihar – 852201</li>
              <li className="flex items-center gap-2 opacity-85"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:7004879171" className="hover:underline">7004879171</a></li>
              <li className="flex items-center gap-2 opacity-85"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:9546756767" className="hover:underline">9546756767</a> · <a href="tel:8709338784" className="hover:underline">8709338784</a></li>
              <li className="flex items-center gap-2 opacity-85"><Mail className="h-4 w-4 shrink-0" /> <a href="mailto:koshigasagency@gmail.com" className="hover:underline">koshigasagency@gmail.com</a></li>
              <li className="text-xs opacity-70 mt-3">Founder · Sanjay Singh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3 justify-between text-xs opacity-70">
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

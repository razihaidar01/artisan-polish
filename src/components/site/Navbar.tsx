import { useEffect, useState } from "react";
import { Phone, Menu, X, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/kga-logo.png";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Products", to: "/services" as const, hash: "products" },
  { label: "Contact Us", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-border transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      {/* Top utility strip */}
      <div className="hidden md:block bg-[var(--brand-navy)] text-white/85 text-[12px]">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> ISI Certified · Trusted Supplier</span>
            <span className="opacity-60">|</span>
            <span>24×7 Emergency Support</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:koshigasagency@gmail.com" className="hover:text-white transition-colors">koshigasagency@gmail.com</a>
            <span className="opacity-60">|</span>
            <a href="tel:7004879171" className="hover:text-white transition-colors inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +91 7004879171</a>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LEFT: Logo + Company name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 md:h-12 md:w-12 bg-white border border-border flex items-center justify-center">
              <img src={logo} alt="Koshi Gas Agency" className="h-8 md:h-9 w-auto object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[var(--brand-navy)] text-[15px] md:text-[17px] tracking-tight uppercase">Koshi Gas Agency</div>
              <div className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.12em] uppercase">Medical &amp; Industrial Gas</div>
            </div>
          </Link>

          {/* CENTER: Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground/75 hover:text-[var(--brand-navy)] transition-colors data-[status=active]:text-[var(--brand-navy)] data-[status=active]:border-b-2 data-[status=active]:border-[var(--brand-red)]"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* RIGHT: Trust badge + CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 border border-border text-[10px] uppercase tracking-[0.12em] text-foreground/70">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-navy)]" /> ISO Quality
            </div>
            <a
              href="https://wa.me/917004879171"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center border border-border text-[#16794a] hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[var(--brand-red)] text-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#b30000] transition-colors"
            >
              Get Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 flex items-center justify-center border border-border"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-up">
            <div className="py-2 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-foreground/80 border-b border-border hover:bg-secondary data-[status=active]:text-[var(--brand-navy)] data-[status=active]:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 p-3">
                <a href="tel:7004879171" className="inline-flex items-center justify-center gap-2 bg-[var(--brand-navy)] text-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.08em]">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[var(--brand-red)] text-white px-4 py-3 text-[12px] font-bold uppercase tracking-[0.08em]">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

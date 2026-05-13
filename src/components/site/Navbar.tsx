import { useEffect, useState } from "react";
import { Phone, Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/kga-logo.png";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl px-3 sm:px-4 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass shadow-elegant px-3 md:px-4 h-14 md:h-16"
              : "bg-transparent px-2 md:px-3 h-14 md:h-16"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group pl-1">
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-white shadow-soft flex items-center justify-center ring-1 ring-border transition-transform group-hover:scale-105">
              <img src={logo} alt="Koshi Gas Agency" className="h-7 md:h-8 w-auto object-contain" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-foreground text-sm md:text-[15px] tracking-tight">Koshi Gas Agency</div>
              <div className="text-[10px] text-muted-foreground tracking-wide">Your Trust, Our Energy</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors data-[status=active]:text-primary data-[status=active]:font-semibold"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="https://wa.me/917004879171"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.62_0.16_155)]/10 text-[oklch(0.45_0.16_155)] ring-1 ring-[oklch(0.62_0.16_155)]/30 hover:bg-[oklch(0.62_0.16_155)]/20 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:7004879171"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 rounded-full flex items-center justify-center glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl shadow-elegant overflow-hidden animate-fade-up">
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-3.5 rounded-2xl text-foreground/85 font-medium hover:bg-white/60 data-[status=active]:bg-white data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-2 px-1 pb-1">
                <a
                  href="tel:7004879171"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-3 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href="https://wa.me/917004879171"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.55_0.18_155)] text-white px-4 py-3 text-sm font-semibold"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

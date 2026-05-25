import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/campaign", label: "Campaign" },
  { to: "/collections", label: "Collections" },
  { to: "/lookbook", label: "Lookbook" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "color-mix(in oklab, var(--color-paper) 92%, transparent)" : "transparent",
        }}
      >
        <div className="flex items-center justify-between px-5 md:px-12 py-5 hairline border-b border-transparent">
          <Link to="/" className="font-display font-black tracking-[0.2em] text-[13px] uppercase">
            L'ALLURE
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="nav-link inline-flex items-center gap-2">
              Contact <span aria-hidden>→</span>
            </Link>
            <button aria-label="Search" className="text-[12px] tracking-[0.2em] uppercase">⌕</button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col md:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <span className="text-[13px] tracking-[0.2em] uppercase font-black">L'ALLURE</span>
            <button onClick={() => setOpen(false)} className="text-2xl" aria-label="Close menu">×</button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-8 px-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="display text-5xl"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 py-8 caption text-paper/60 flex gap-6">
            <span>Instagram</span><span>YouTube</span><span>Twitter</span>
          </div>
        </div>
      )}
    </>
  );
}

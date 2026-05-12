/*
 * Design: Cosmic Data Flow — Sticky transparent navbar that gains backdrop blur on scroll.
 * Space Grotesk for brand name, DM Sans for nav links.
 * Cyan glow accent on active/hover states.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/navax-logo_2cd208dc.png";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },

  { label: "Why NavaX", href: "/#why-navax" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
      if (href === "/services") window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.10_0.03_260/0.85)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setLocation("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 group"
        >
          <img src={LOGO_URL} alt="NavaX Technologies" className="h-10 w-10 lg:h-12 lg:w-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Nava<span className="text-cyan-400">X</span>
            </span>
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-cyan-400/60 font-medium">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#contact")}
            className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[oklch(0.10_0.03_260/0.95)] backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="py-3 px-4 text-left text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/#contact")}
                className="mt-2 py-3 px-4 text-base font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/*
 * Design: Cosmic Data Flow — Minimal footer with logo, nav links, and copyright.
 * Glow line separator at top.
 */
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/navax-logo_2cd208dc.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why NavaX", href: "#why-navax" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Glow line */}
      <div className="glow-line" />

      <div className="container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="NavaX Technologies" className="h-8 w-8" />
            <span className="font-heading text-base font-bold text-white">
              Nava<span className="text-cyan-400">X</span>{" "}
              <span className="text-slate-400 font-normal text-sm">Technologies</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} NavaX Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

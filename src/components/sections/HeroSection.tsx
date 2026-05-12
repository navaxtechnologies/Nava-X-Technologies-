/*
 * Design: Cosmic Data Flow — Full viewport hero with particle-like background image,
 * large Space Grotesk headline, staggered animation, and dual CTAs.
 */
import { motion } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/navax-logo_2cd208dc.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/hero-bg-8Gp4BuCubjkJiriVsHn7xG.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.04_260)] via-[oklch(0.10_0.03_260)] to-[oklch(0.12_0.025_260)]" />
        {/* Hero image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Radial glow from center-left */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/8 rounded-full blur-[120px]" />
        {/* Radial glow from right */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[100px]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.10_0.03_260)] to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Logo badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
              <img src={LOGO_URL} alt="" className="h-6 w-6" />
              <span className="text-sm font-medium text-cyan-300 tracking-wide">AI-Powered Business Solutions</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
          >
            Scale Your Business{" "}
            <br className="hidden sm:block" />
            with{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent glow-text-cyan">
              AI Automation
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            NavaX Technologies empowers businesses with intelligent systems that save time,
            reduce costs, and deliver exceptional customer experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="group relative px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 text-base font-semibold rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              Book a Free Consultation
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Automations Built" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white glow-text-cyan">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

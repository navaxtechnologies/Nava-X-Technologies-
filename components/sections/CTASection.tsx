/*
 * Design: Cosmic Data Flow — Full-width CTA section with gradient background,
 * bold headline, and prominent action buttons.
 */
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Rocket } from "lucide-react";

export default function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.15_0.06_260)] via-[oklch(0.12_0.05_240)] to-[oklch(0.10_0.03_260)]" />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 mb-8">
              <Rocket className="w-8 h-8 text-cyan-400" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Scale{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Smarter?
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
              Let us show you how AI automation can transform your business. Book a free consultation
              and discover the growth potential waiting for you — with better customer experiences at every step.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("#contact")}
                className="group relative px-10 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="px-10 py-4 text-base font-semibold rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Our Services
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/*
 * Design: Cosmic Data Flow — Community section with full-width background image,
 * overlay gradient, and centered message. Emotional, mission-driven tone.
 */
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/community-section-d5pPrKPM99c7pxyrv8pxAW.webp";

export default function CommunitySection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="community" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={COMMUNITY_IMG}
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.03_260)] via-[oklch(0.10_0.03_260/0.85)] to-[oklch(0.10_0.03_260)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.03_260)] via-transparent to-[oklch(0.10_0.03_260)]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Our Community</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Empowering Businesses,{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Strengthening Communities
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6">
              We are passionate about helping our community grow. By bringing powerful AI tools
              to local and growing businesses, we help them compete, scale, and deliver outstanding
              service to their customers.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <p className="text-base text-slate-400 leading-relaxed mb-10">
              Every business we serve makes our community stronger. Whether you are a small local shop
              or a rapidly growing enterprise, NavaX Technologies is here to ensure you have the tools
              and support to succeed in an increasingly digital world.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              Join Our Community
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

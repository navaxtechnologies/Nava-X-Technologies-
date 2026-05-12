/*
 * Design: Cosmic Data Flow — Why Choose NavaX section.
 * Left-aligned content with staggered feature rows.
 * Each feature has an icon, title, and description in a horizontal layout.
 */
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Settings, Heart, BarChart3, Plug, Headphones, Users } from "lucide-react";

const reasons = [
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "No one-size-fits-all here. Every automation strategy is custom-built around your unique business processes, goals, and customer journey.",
  },
  {
    icon: Heart,
    title: "Built with Customer Experience in Mind",
    description: "We never sacrifice the human touch. Our AI solutions enhance — not replace — the personal connections your customers value.",
  },
  {
    icon: BarChart3,
    title: "Real Business Results",
    description: "We measure success in outcomes, not just technology. Increased revenue, reduced costs, and happier customers are our benchmarks.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "Our solutions plug seamlessly into your existing tools and workflows. No disruptive overhauls — just smooth, powerful upgrades.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We do not just set it and forget it. Our team provides continuous optimization, monitoring, and support to keep your systems running at peak performance.",
  },
  {
    icon: Users,
    title: "Community-First Mindset",
    description: "We are driven by a genuine desire to help businesses in our community thrive. Your success is our success.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-navax" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.08_0.04_260)] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/4 rounded-full blur-[150px]" />

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Why NavaX</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Why Businesses{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Choose NavaX
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We combine deep industry experience with cutting-edge AI to deliver solutions
              that actually work for your business.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={reason.title} animation="fadeUp" delay={i * 0.08}>
              <div className="group relative">
                {/* Connector line (visible on lg) */}
                <div className="hidden lg:block absolute -top-5 left-6 w-px h-5 bg-gradient-to-b from-transparent to-cyan-500/30" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center border border-cyan-500/10 group-hover:border-cyan-500/25 group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-blue-600/20 transition-all duration-500">
                    <reason.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

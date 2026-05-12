/*
 * Design: Cosmic Data Flow — About section with asymmetric layout.
 * Left: generated image showing human-AI fusion. Right: story content.
 * Staggered scroll animations, gradient accents.
 */
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Heart, Sparkles, Users } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/about-section-Jn47uTgkM7Bf38HxLNVcR9.webp";

const values = [
  {
    icon: Heart,
    title: "Customer-First",
    description: "Every solution we build starts with the customer experience in mind.",
  },
  {
    icon: Sparkles,
    title: "AI Efficiency",
    description: "We harness cutting-edge AI to streamline operations and reduce costs.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "We are passionate about empowering local and growing businesses.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="container">
        {/* Section label */}
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">About Us</span>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <AnimateOnScroll animation="fadeLeft" className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img
                  src={ABOUT_IMG}
                  alt="The fusion of human connection and AI technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 gradient-border p-4 sm:p-5 backdrop-blur-xl bg-[oklch(0.12_0.03_260/0.9)]">
                <div className="font-heading text-3xl font-bold text-white glow-text-cyan">10+</div>
                <div className="text-sm text-slate-400 mt-0.5">Years in Hospitality<br />& Customer Service</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <AnimateOnScroll animation="fadeRight">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Built on Real-World{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight" delay={0.1}>
              <p className="text-lg text-slate-300 leading-relaxed mb-5">
                NavaX Technologies was born from a deep understanding that every customer interaction matters.
                With over a decade of hands-on experience in the hospitality and customer service industry,
                our founder saw firsthand how businesses struggle to balance efficiency with exceptional service.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeRight" delay={0.2}>
              <p className="text-base text-slate-400 leading-relaxed mb-10">
                That is why we built NavaX — to combine the power of AI automation with a human-centered approach.
                We do not just deliver technology; we deliver solutions that help businesses scale smarter while
                maintaining the personal touch their customers deserve. Our mission is to serve our community
                by bringing the most practical, results-driven AI tools to businesses of every size.
              </p>
            </AnimateOnScroll>

            {/* Values */}
            <div className="space-y-4">
              {values.map((val, i) => (
                <AnimateOnScroll key={val.title} animation="fadeRight" delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                      <val.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white mb-1">{val.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{val.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

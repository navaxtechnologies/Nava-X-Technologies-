/*
 * Design: Cosmic Data Flow — Services section with gradient-border cards.
 * Each card has a glowing icon, title, description, and benefit tags.
 * Staggered scroll reveal with hover glow effects.
 */
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Workflow, MessageSquareMore, TrendingUp, UserSearch, Cpu, Clock, DollarSign, Smile } from "lucide-react";

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/services-visual-imkpWB8gjFaAgSddCkMwGp.webp";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Streamline your operations with intelligent automation using N8N, Make, and Zapier. We connect your tools and eliminate repetitive tasks so your team can focus on what matters.",
    benefits: ["Save 20+ hours/week", "Zero manual errors", "Seamless integrations"],
  },
  {
    icon: MessageSquareMore,
    title: "Chatbots & Customer Support AI",
    description: "Deploy intelligent chatbots that handle customer inquiries 24/7 with natural, human-like conversations. Reduce response times and improve satisfaction scores.",
    benefits: ["24/7 availability", "Instant responses", "Higher CSAT scores"],
  },
  {
    icon: TrendingUp,
    title: "Business Process Optimization",
    description: "Analyze and optimize your business workflows with AI-driven insights. Identify bottlenecks, reduce waste, and create efficient processes that scale with your growth.",
    benefits: ["Data-driven decisions", "Reduced overhead", "Scalable processes"],
  },
  {
    icon: UserSearch,
    title: "Lead Generation & CRM Automation",
    description: "Automate your sales pipeline from lead capture to conversion. AI-powered scoring, nurturing sequences, and CRM integrations that turn prospects into loyal customers.",
    benefits: ["Higher conversion rates", "Automated follow-ups", "Qualified leads"],
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Need something unique? We build bespoke AI solutions tailored to your specific business challenges. From custom models to specialized integrations, we make it happen.",
    benefits: ["Tailored to your needs", "Competitive advantage", "Future-proof tech"],
  },
];

const benefitIcons: Record<string, typeof Clock> = {
  time: Clock,
  revenue: DollarSign,
  experience: Smile,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Our Services</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Intelligent Solutions for{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Every Business
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From workflow automation to custom AI — we deliver practical solutions that save time,
              increase revenue, and improve customer experience.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services visual */}
        <AnimateOnScroll animation="scaleIn" className="mb-16 lg:mb-20">
          <div className="relative rounded-2xl overflow-hidden glow-cyan max-w-4xl mx-auto">
            <img
              src={SERVICES_IMG}
              alt="AI automation dashboard visualization"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.03_260)] via-transparent to-transparent" />
          </div>
        </AnimateOnScroll>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll
              key={service.title}
              animation="fadeUp"
              delay={i * 0.1}
              className={i === 4 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none" : ""}
            >
              <div className="group gradient-border p-6 lg:p-7 h-full hover:bg-[oklch(0.16_0.03_260)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 flex items-center justify-center mb-5 border border-cyan-500/10 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-500/8 text-cyan-300/80 border border-cyan-500/10"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

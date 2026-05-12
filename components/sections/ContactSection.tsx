/*
 * Design: Cosmic Data Flow — Contact section with form on the right,
 * info on the left. Gradient-border form card with glassmorphism.
 */
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663477928365/DxdC8jxiF6fnagy2bTQUus/navax-logo_2cd208dc.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const addContactMutation = trpc.crm.addContact.useMutation({
    onSuccess: () => {
      setSending(false);
      toast.success("Message sent! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", businessType: "", message: "" });
    },
    onError: () => {
      setSending(false);
      toast.error("Failed to send message. Please try again or check your Airtable configuration.");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    addContactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Get in Touch</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Ready to transform your business with AI? Reach out and let's start a conversation.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left info column */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fadeLeft">
              <div className="space-y-8">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-8">
                  <img src={LOGO_URL} alt="" className="h-10 w-10" />
                  <div>
                    <div className="font-heading text-lg font-bold text-white">
                      Nava<span className="text-cyan-400">X</span> Technologies
                    </div>
                    <div className="text-xs text-slate-400">AI Automation Solutions</div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/10 flex-shrink-0">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Email Us</div>
                      <div className="text-sm text-slate-400">hello@navaxtech.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/10 flex-shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Call Us</div>
                      <div className="text-sm text-slate-400">+1 (555) 000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/10 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Location</div>
                      <div className="text-sm text-slate-400">Serving businesses nationwide</div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <div className="text-sm font-medium text-white mb-3">Follow Us</div>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Facebook, label: "Facebook" },
                      { icon: Instagram, label: "Instagram" },
                    ].map((social) => (
                      <button
                        key={social.label}
                        onClick={() => toast.info("Social links coming soon!")}
                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-3">
            <AnimateOnScroll animation="fadeRight">
              <form onSubmit={handleSubmit} className="gradient-border p-6 sm:p-8 bg-[oklch(0.12_0.03_260/0.8)] backdrop-blur-xl">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all text-sm appearance-none"
                    >
                      <option value="" disabled className="bg-[oklch(0.12_0.03_260)] text-slate-400">Select your industry</option>
                      <option value="hospitality" className="bg-[oklch(0.12_0.03_260)]">Hospitality & Restaurant</option>
                      <option value="retail" className="bg-[oklch(0.12_0.03_260)]">Retail & E-commerce</option>
                      <option value="healthcare" className="bg-[oklch(0.12_0.03_260)]">Healthcare</option>
                      <option value="realestate" className="bg-[oklch(0.12_0.03_260)]">Real Estate</option>
                      <option value="professional" className="bg-[oklch(0.12_0.03_260)]">Professional Services</option>
                      <option value="technology" className="bg-[oklch(0.12_0.03_260)]">Technology</option>
                      <option value="other" className="bg-[oklch(0.12_0.03_260)]">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you'd like to automate..."
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

const bottlenecks = [
  "High Operational Costs",
  "Slow Manual Processes",
  "Low Lead Conversion",
  "Poor Customer Support",
];

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedBottleneck, setSelectedBottleneck] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const crmMutation = trpc.crm.addContact.useMutation();

  useEffect(() => {
    // Pop up after 10 seconds of user reading the landing page
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenLeadPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenLeadPopup", "true");
  };

  const handleNext = () => {
    if (selectedBottleneck) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    crmMutation.mutate(
      {
        name,
        email,
        businessType: "Popup Lead",
        message: `User specifically noted their biggest business bottleneck is: ${selectedBottleneck}`,
      },
      {
        onSuccess: () => {
          setStep(3); // success view
          toast.success("Strategy locked!", {
            description: "We'll send your customized AI breakdown shortly.",
          });
          setTimeout(closePopup, 3000);
        },
        onError: () => {
          toast.error("Connection Error", {
            description: "Please try again later or use our main contact form.",
          });
        },
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 z-50 w-[350px] overflow-hidden rounded-2xl border border-primary/20 bg-background/95 p-6 shadow-[0_0_50px_rgba(0,194,255,0.15)] backdrop-blur-xl sm:bottom-8 sm:right-8"
        >
          <button
            onClick={closePopup}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold leading-tight">
                Unlock Your Free <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">AI Strategy</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                What is the single biggest bottleneck in your business right now?
              </p>
              <div className="flex flex-col gap-2">
                {bottlenecks.map((bn) => (
                  <button
                    key={bn}
                    onClick={() => {
                      setSelectedBottleneck(bn);
                      setStep(2);
                    }}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition-all hover:border-primary/50 hover:bg-primary/5 ${
                      selectedBottleneck === bn
                        ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(0,194,255,0.2)]"
                        : "border-primary/10"
                    }`}
                  >
                    {bn}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold leading-tight">
                Perfect! We have a <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">solution</span> for that.
              </h3>
              <p className="text-sm text-muted-foreground">
                Drop your name and email. We will send a customized case study on how AI eliminates "{selectedBottleneck}".
              </p>
              
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
                className="w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm outline-none transition focus:border-primary"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm outline-none transition focus:border-primary"
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-primary text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/40"
                disabled={crmMutation.isPending}
              >
                {crmMutation.isPending ? "Connecting..." : "Get My Custom Strategy"}
              </Button>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-4 py-4 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-400">Strategy Locked</h3>
              <p className="text-sm text-muted-foreground">Check your inbox soon.</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

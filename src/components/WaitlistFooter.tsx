"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/utils";

export default function WaitlistFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Store in localStorage
      const existing = JSON.parse(
        localStorage.getItem("hela-waitlist") || "[]"
      );
      existing.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("hela-waitlist", JSON.stringify(existing));

      // Try API route if available (won't exist on static hosting)
      try {
        await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        // Silently fail — localStorage is the primary store on static hosting
      }

      toast.success("You're on the list! We'll be in touch soon.");
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="waitlist" className="py-24 px-6 border-t border-hela-border">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We&apos;re launching soon.
          </h2>
          <p className="mt-4 text-hela-muted max-w-md mx-auto">
            Join the waitlist to be first in line when HELA opens its doors.
            Your journey starts with one step.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="flex-1 h-12 rounded-full border-hela-border bg-surface px-5 text-sm focus-visible:ring-coral"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full bg-coral text-white hover:bg-coral-hover h-12 px-8 text-sm font-medium"
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 text-coral font-medium"
            >
              You&apos;re in! We&apos;ll reach out soon.
            </motion.p>
          )}
        </motion.div>

        <div className="mt-20 pt-8 border-t border-hela-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hela-muted">
          <span>&copy; {new Date().getFullYear()} HELA. All rights reserved.</span>
          <a
            href="mailto:hello@hela.org"
            className="hover:text-charcoal transition-colors"
          >
            hello@hela.org
          </a>
        </div>
      </div>
    </footer>
  );
}

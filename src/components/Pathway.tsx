"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Welcome & Intake",
    promise: "We learn your story, goals, and where you are right now.",
    bullets: [
      "Background & transcript review",
      "Goal-setting conversation",
    ],
    milestone: "Your personal profile is complete",
  },
  {
    step: "02",
    title: "Your Roadmap",
    promise: "A clear, actionable plan built just for you.",
    bullets: [
      "School shortlist matched to your goals",
      "Application timeline with deadlines",
    ],
    milestone: "Roadmap delivered within 2 weeks",
  },
  {
    step: "03",
    title: "Mentorship + Workshops",
    promise: "Ongoing support, not just a plan handed off.",
    bullets: [
      "1-on-1 mentor check-ins",
      "FAFSA, essay, and interview workshops",
    ],
    milestone: "Applications submitted with confidence",
  },
  {
    step: "04",
    title: "Milestones & Outcomes",
    promise: "We stay until you've crossed the finish line.",
    bullets: [
      "Acceptance letter support",
      "Enrollment & orientation guidance",
    ],
    milestone: "You're enrolled and ready to thrive",
  },
];

const stepVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Pathway() {
  return (
    <section id="pathway" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The HELA Pathway
          </h2>
          <p className="mt-4 text-hela-muted max-w-xl mx-auto">
            A proven four-step process that takes you from &quot;where do I
            start?&quot; to &quot;I&apos;m enrolled.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stepVariant}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-hela-border" />
              )}

              <div className="bg-surface border border-hela-border rounded-2xl p-6 h-full">
                <div
                  className="text-xs font-bold text-coral tracking-widest"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  STEP {step.step}
                </div>
                <h3
                  className="mt-2 text-base font-semibold text-charcoal"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-hela-muted">{step.promise}</p>
                <ul className="mt-3 space-y-1">
                  {step.bullets.map((b) => (
                    <li key={b} className="text-xs text-hela-muted flex gap-2">
                      <span className="text-coral mt-0.5">&#8226;</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-hela-border">
                  <p className="text-xs text-hela-muted italic">
                    {step.milestone}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-lg font-semibold text-charcoal"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          We don&apos;t disappear after step one. We stay until your milestones
          are reached.
        </motion.p>
      </div>
    </section>
  );
}

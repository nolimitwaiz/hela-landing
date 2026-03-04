"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🗺️",
    title: "Personalized Roadmaps",
    description:
      "A step-by-step plan tailored to your goals — from community college transfers to four-year applications.",
  },
  {
    icon: "💰",
    title: "FAFSA & Scholarships",
    description:
      "Navigate financial aid, find scholarships you actually qualify for, and demystify the FAFSA process.",
  },
  {
    icon: "🌍",
    title: "Multilingual Support",
    description:
      "Guidance in multiple languages — because language shouldn't be a barrier to education.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
            An Always-On Mentor
          </h2>
          <p className="mt-4 text-hela-muted max-w-xl mx-auto">
            HELA isn&apos;t a one-time workshop. It&apos;s a system that stays
            with you from your first question to your first semester.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariant}
              className="bg-surface border border-hela-border rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {card.icon}
              </span>
              <h3
                className="mt-4 text-lg font-semibold text-charcoal"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-hela-muted leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

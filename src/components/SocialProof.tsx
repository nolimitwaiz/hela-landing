"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Students Guided" },
  { number: "12", label: "University Partners" },
  { number: "8", label: "Languages Supported" },
  { number: "$2M+", label: "In Aid Secured" },
];

export default function SocialProof() {
  return (
    <section className="py-16 px-6 border-y border-hela-border">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="text-3xl sm:text-4xl font-bold text-coral"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {stat.number}
            </div>
            <div className="mt-1 text-sm text-hela-muted">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

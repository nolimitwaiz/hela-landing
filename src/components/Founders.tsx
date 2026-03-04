"use client";

import { motion } from "framer-motion";

const values = ["Dignity-first", "Privacy-respecting", "High standards"];

export default function Founders() {
  return (
    <section id="founders" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Abstract gradient placeholder */}
          <motion.div
            className="aspect-[3/2] sm:aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-coral/20 via-surface to-sand border border-hela-border flex items-center justify-center"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-6xl sm:text-7xl font-bold text-coral/30"
              style={{ fontFamily: "var(--font-heading)" }}
              aria-hidden="true"
            >
              HELA
            </span>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built by Someone Who Gets It
            </h2>
            <p className="mt-6 text-hela-muted leading-relaxed">
              HELA — &quot;hope&quot; in Pashto — was founded by someone who
              knows firsthand how overwhelming the U.S. college system can be
              for newcomer students. He built what he wished he had: a guide
              that doesn&apos;t just point the way, but walks the path with you.
            </p>
            <p className="mt-4 text-hela-muted leading-relaxed">
              Every newcomer student carries untapped potential. HELA exists to
              unlock it — with dignity, not charity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="text-xs font-medium tracking-wide text-charcoal bg-surface border border-hela-border px-4 py-2 rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

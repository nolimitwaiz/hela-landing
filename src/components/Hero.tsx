"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TrajectoryGraphic from "./TrajectoryGraphic";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const tags = ["MENTORSHIP", "ROADMAPS", "AID + SCHOLARSHIPS"];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-widest text-coral bg-coral/10 px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Your Journey Doesn&apos;t Stop Here.
          <br />
          <span className="text-coral">It&apos;s Just Beginning.</span>
        </motion.h1>

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg text-hela-muted max-w-2xl mx-auto leading-relaxed px-2"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          HELA is the launchpad that newcomer students deserve — personalized
          college roadmaps, scholarship guidance, and mentors who walk the path
          with you.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Button
            asChild
            className="rounded-full bg-coral text-white hover:bg-coral-hover px-8 py-3 h-12 text-base font-medium"
          >
            <a href="#waitlist">I&apos;m a Student</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-hela-border text-charcoal hover:bg-surface px-8 py-3 h-12 text-base font-medium"
          >
            <a href="#founders">Partner with Us</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <TrajectoryGraphic />
        </motion.div>
      </div>
    </section>
  );
}

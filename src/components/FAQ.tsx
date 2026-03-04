"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is HELA free?",
    answer:
      "Yes. HELA is completely free for students. We're funded by grants, partnerships, and donations — never by the students we serve.",
  },
  {
    question: "Who can join?",
    answer:
      "HELA is designed for newcomer and first-generation students navigating the U.S. college system. Whether you're in high school, community college, or starting fresh, we can help.",
  },
  {
    question: "What if I'm already enrolled in college?",
    answer:
      "We can still help! Whether you're looking to transfer, find scholarships for your current program, or need academic mentoring, HELA supports students at every stage.",
  },
  {
    question: "How do I apply?",
    answer:
      "Join our waitlist and we'll reach out with next steps. There's no formal application — just a conversation to understand your goals and how we can help.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="border border-hela-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-surface hover:bg-surface/80 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-charcoal">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-coral text-xl leading-none flex-shrink-0 ml-4"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-hela-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

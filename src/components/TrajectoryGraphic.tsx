"use client";

import { motion } from "framer-motion";

export default function TrajectoryGraphic() {
  return (
    <div className="w-full max-w-lg mx-auto" aria-hidden="true">
      <svg viewBox="0 0 400 120" fill="none" className="w-full h-auto">
        {/* Main curved path */}
        <path
          d="M 20 90 Q 100 90 150 60 Q 200 30 250 40 Q 300 50 350 20 L 380 10"
          stroke="#D6D1C8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Animated coral dot traveling along the path */}
        <motion.circle
          r="6"
          fill="#FF7676"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path("M 20 90 Q 100 90 150 60 Q 200 30 250 40 Q 300 50 350 20 L 380 10")`,
          }}
        />

        {/* Glow effect behind the dot */}
        <motion.circle
          r="12"
          fill="#FF7676"
          opacity="0.2"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path("M 20 90 Q 100 90 150 60 Q 200 30 250 40 Q 300 50 350 20 L 380 10")`,
          }}
        />

        {/* Small milestone dots on the path */}
        <circle cx="150" cy="60" r="3" fill="#D6D1C8" />
        <circle cx="250" cy="40" r="3" fill="#D6D1C8" />
        <circle cx="380" cy="10" r="4" fill="#FF7676" />

        {/* Arrow at the end */}
        <path
          d="M 374 14 L 384 8 L 376 4"
          stroke="#FF7676"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

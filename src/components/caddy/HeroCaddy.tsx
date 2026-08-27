import { motion } from "motion/react";
import { OrbStage } from "./OrbStage";

/**
 * Hero visual: the react-three-fiber Caddy orb (glass head + glowing core +
 * orbiting ring) with pointer-tracked rotation, plus floating glass trust chips.
 */
export function HeroCaddy() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, mass: 1 }}
    >
      <OrbStage className="aspect-square w-full" />

      {[
        { label: "Verified clinics", pos: "left-0 top-10" },
        { label: "No lobby waiting", pos: "right-0 bottom-16" },
      ].map((chip, i) => (
        <motion.span
          key={chip.label}
          className={`glass-card absolute ${chip.pos} rounded-full px-3 py-1.5 text-xs font-bold`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.5 + i * 0.15 }}
        >
          {chip.label}
        </motion.span>
      ))}
    </motion.div>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionWrap({ children }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function MotionWrap2({ children }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

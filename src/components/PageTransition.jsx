import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps page content with a smooth fade + slide-up transition on mount.
 * Drop it around any route's children to get buttery page transitions.
 */
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
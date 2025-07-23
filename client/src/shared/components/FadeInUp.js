// components/FadeInUp.js
/**
 * ただのFaade-in
 */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const FadeInUp = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;

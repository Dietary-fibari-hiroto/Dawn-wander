// components/FadeReveal.js
/**
 * 下hidden領域からこんにちは
 */
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const FadeReveal = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        display: "inline-block", // 必要なら block に
      }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeReveal;

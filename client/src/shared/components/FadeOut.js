import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const FadeOut = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOut;

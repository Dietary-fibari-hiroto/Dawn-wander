import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const ImgExpansionFadeIn = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      className="img-expansion"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ImgExpansionFadeIn;

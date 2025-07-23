import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const SideShow = ({ children, className }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      className={`${className}`}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SideShow;

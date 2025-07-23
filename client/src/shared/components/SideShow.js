import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const SideShow = ({ children, className, key }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      className={`${className}`}
      ref={ref}
      initial={{ opacity: 0, x: "-100%" }}
      animate={isInView ? { opacity: 1, x: "0%" } : {}}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SideShow;

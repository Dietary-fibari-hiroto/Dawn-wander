import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UnderShow = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default UnderShow;

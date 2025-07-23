import { motion } from "framer-motion";
import { resTopPageMotion } from "../../../../shared/utils/motionConfig";

const TopSection = (props) => {
  return (
    <section
      className="section-frame flex-all-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.p {...resTopPageMotion} className="string-sm">
        {props.title}
      </motion.p>
    </section>
  );
};

export default TopSection;

import { motion, AnimatePresence } from "framer-motion";
import { animationConfig } from "../../../../config/motionConfig";

const FaqTag = (props) => {
  return (
    <div className="flex items-start justify-start w-[600px] transition-height duration-300">
      <button
        onClick={props.onClick}
        className={`plus-motion string-m transition-transform duration-300 ${
          props.state && "rotate-[45deg]"
        }`}
      >
        +
      </button>
      <div>
        <p className="string-rg">{props.q}</p>
        <AnimatePresence mode="wait">
          {props.state && (
            <motion.div key={props.key} {...animationConfig}>
              <p className="string-sm">{props.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqTag;

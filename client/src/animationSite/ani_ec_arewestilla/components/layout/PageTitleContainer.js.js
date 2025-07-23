import { motion } from "framer-motion";
import { ecFirstMotion } from "../../../../shared/utils/motionConfig";

const PageTitleContainer = (items) => {
  return (
    <section
      className="text-white relative section-frame bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(#00000088),url(${items.bg})`,
      }}
    >
      <div className="absolute bottom-[10%] left-[10%]">
        <div>
          <motion.p {...ecFirstMotion} className="text-hover-lift string-big ">
            {items.title}
          </motion.p>
        </div>
        <div>
          <motion.p {...ecFirstMotion} className="text-hover-lift string-sm">
            {items.subTitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default PageTitleContainer;

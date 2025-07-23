import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { resLoadingMotion } from "../../../shared/utils/motionConfig";

const ResLoading = () => {
  const navigate = useNavigate();
  const [percent, setPercent] = useState(0);
  const [isShowConcept, setIsShowConcept] = useState(false);
  const handleNext = () => {
    setTimeout(() => {
      navigate("/ani/res");
    }, 6000);
  };
  useEffect(() => {
    const timeId = setInterval(() => {
      if (percent < 100) {
        setPercent((prev) => prev + 1);
      } else {
        setIsShowConcept(true);
        handleNext();
      }
    }, 50);

    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <AnimatePresence mode="wait">
      {isShowConcept ? (
        <motion.div
          key="resLoading2"
          {...resLoadingMotion}
          className="section-frame flex-all-center text-white text-center"
        >
          {" "}
          <div className="kinuta-maruminfuji-stdn string-sm">
            <p>
              世界が静かに切り替わる
              <br />
              わたしがわたしに戻る
              <br />
              やわらかな空間で。
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="resLoading1"
          {...resLoadingMotion}
          className="kinuta-maruminfuji-stdn section-frame flex-all-center flex-col text-center space-y-[100px] text-white"
        >
          <div>
            <p className="string-sm">
              Please keep your communication devices turned on during the
              screening.
            </p>
            <p className="string-s">
              電子機器の電源は入れたままにして置いてください。
            </p>
          </div>
          <div className="flex items-center space-x-[10px]">
            <p>{percent}%</p>
            <div class="rotate-animation size-[20px] rounded-full border-2 border-white border-t-transparent " />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResLoading;

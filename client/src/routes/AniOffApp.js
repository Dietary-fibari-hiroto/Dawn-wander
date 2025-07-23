import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { OffHome } from "../animationSite/ani_off_ss/pages";
import { OffFooter, OffHeader } from "../animationSite/ani_off_ss/components";
import "../animationSite/ani_off_ss/assets/styles/styled.css";
import "../animationSite/ani_off_ss/assets/styles/animateConfig.css";
import OffRetouch from "../animationSite/ani_off_ss/pages/OffRetouch";
import OffContest from "../animationSite/ani_off_ss/pages/OffContest";
import OffGate from "../animationSite/ani_off_ss/pages/OffGate";
import ScrollReset from "../shared/hooks/ScrollReset";

export const OffProjectNumber = 3;
const AnimationNumber = null;

const RouteList = [
  { path: "/", element: <OffHome /> },
  { path: "/retouch", element: <OffRetouch /> },
  { path: "/contest", element: <OffContest /> },
  { path: "/gate", element: <OffGate /> },
];

const AniOffApp = () => {
  const location = useLocation();
  return (
    <div className="bg-[#5C7A99] text-white UDDigiKyokasho-Pro-R">
      <OffHeader />
      <AnimatePresence mode="wait">
        <ScrollReset />{" "}
        <Routes location={location} key={location.pathname}>
          {RouteList.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  {item.element}
                </motion.div>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
      <OffFooter />
    </div>
  );
};

export default AniOffApp;

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { OffHome } from "../sites/off_ss/pages";
import { OffFooter, OffHeader } from "../sites/off_ss/components";
import "../sites/off_ss/assets/styles/styled.css";
import "../sites/off_ss/assets/styles/animateConfig.css";
import OffRetouch from "../sites/off_ss/pages/OffRetouch";
import OffContest from "../sites/off_ss/pages/OffContest";
import OffGate from "../sites/off_ss/pages/OffGate";
import ScrollReset from "../shared/hooks/ScrollReset";

export const OffProjectNumber = 3;
const AnimationNumber = null;

const RouteList = [
  { path: "/", element: <OffHome /> },
  { path: "/retouch", element: <OffRetouch /> },
  { path: "/contest", element: <OffContest /> },
  { path: "/gate", element: <OffGate /> },
];

const OffApp = () => {
  const location = useLocation();
  return (
    <div className="bg-[#5C7A99] text-white UDDigiKyokasho-Pro-R">
      <OffHeader />
      <AnimatePresence mode="wait">
        <ScrollReset />{" "}
        <Routes location={location} key={location.pathname}>
          {RouteList.map((list, index) => (
            <Route key={index} {...list} />
          ))}
        </Routes>
      </AnimatePresence>
      <OffFooter />
    </div>
  );
};

export default OffApp;

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { OffHome } from "../sites/off_ss/pages";
import { OffHeader } from "../sites/off_ss/components";
import "../sites/off_ss/assets/styles/styled.css";

const RouteList = [{ path: "/", element: <OffHome /> }];

const OffApp = () => {
  const location = useLocation();
  return (
    <div className="bg-[#5C7A99] text-white UDDigiKyokasho-Pro-R">
      <OffHeader />
      <AnimatePresence mode="wait">
        {" "}
        <Routes location={location} key={location.pathname}>
          {RouteList.map((list, index) => (
            <Route key={index} {...list} />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default OffApp;

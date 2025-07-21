import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Start,
  Home,
  Notes,
  Precaution,
  Introduction,
  PretrialSurvery,
  Question,
} from "../sites/main_unit/pages";
import { motionSet } from "../shared/utils/motionConfig";

const RouteList = [
  { path: "/", element: <Start /> },
  { path: "/pretrialsurvery", element: <PretrialSurvery /> },
  { path: "/home", element: <Home /> },
  { path: "/notes", element: <Notes /> },
  { path: "/precaution", element: <Precaution /> },
  { path: "/introduction", element: <Introduction /> },
  { path: "/question", element: <Question /> },
];

const MainUnitApp = () => {
  const location = useLocation();
  return (
    <div className="UDDigiKyokasho-Pro-R">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {RouteList.map((list, index) => (
            <Route
              key={index}
              path={list.path}
              element={<motion.div {...motionSet}>{list.element}</motion.div>}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default MainUnitApp;

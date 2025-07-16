import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Start,
  Home,
  BlurScreen,
  Notes,
  Precaution,
  Introduction,
} from "../sites/main_unit/pages";

const animation = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 0.5 },
};

const RouteList = [
  { path: "/", element: <Start /> },
  { path: "/home", element: <Home /> },
  { path: "/blur", element: <BlurScreen /> },
  { path: "/notes", element: <Notes /> },
  { path: "/precaution", element: <Precaution /> },
  { path: "/introduction", element: <Introduction /> },
];

const MainUnitApp = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {RouteList.map((list, index) => (
          <Route
            key={index}
            path={list.path}
            element={<motion.div {...animation}>{list.element}</motion.div>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default MainUnitApp;

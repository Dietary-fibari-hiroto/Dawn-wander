import { Routes, Route, useLocation } from "react-router-dom";
import {
  EcAbout,
  EcCart,
  EcHome,
  EcProduct,
  EcProductDetail,
} from "../animationSite/ani_ec_arewestilla/pages";
import { EcHeader } from "../animationSite/ani_ec_arewestilla/components";
import EcFooter from "../animationSite/ani_ec_arewestilla/components/layout/EcFooter";
import ScrollReset from "../shared/hooks/ScrollReset";
import { motion, AnimatePresence } from "framer-motion";

import { CartProvider } from "../animationSite/ani_ec_arewestilla/contexts/CartContext";

const RouteList = [
  { path: "/", element: <EcHome /> },
  { path: "/about", element: <EcAbout /> },
  { path: "/cart", element: <EcCart /> },
  { path: "/productlist", element: <EcProduct /> },
  { path: "/product", element: <EcProductDetail /> },
];

//プロジェクト番号
export const EcProjectNumber = 2;

const animation = {
  initial: { filter: "saturate(0%)", opacity: 0 },
  animate: { filter: "saturate(100%)", opacity: 1 },
  exit: { filter: "saturate(0%)", opacity: 0 },
  transition: { duration: 0.5 },
};

const AniEcApp = () => {
  const location = useLocation();

  return (
    <div className="bg-white Yu-Mincho-Pr6N-R">
      <CartProvider>
        <EcHeader />

        <AnimatePresence mode="wait">
          <ScrollReset />
          <Routes location={location} key={location.pathname}>
            {RouteList.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<motion.div {...animation}>{item.element}</motion.div>}
              />
            ))}
          </Routes>
        </AnimatePresence>
        <EcFooter />
      </CartProvider>
    </div>
  );
};

export default AniEcApp;

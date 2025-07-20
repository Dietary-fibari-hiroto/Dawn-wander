import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  EcAbout,
  EcCart,
  EcHome,
  EcProduct,
  EcProductDetail,
} from "../sites/ec_arewestilla/pages";
import { EcHeader } from "../sites/ec_arewestilla/components";
import EcFooter from "../sites/ec_arewestilla/components/layout/EcFooter";
import ScrollReset from "../shared/hooks/ScrollReset";

import { CartProvider } from "../sites/ec_arewestilla/contexts/CartContext";

const RouteList = [
  { path: "/", element: <EcHome /> },
  { path: "/about", element: <EcAbout /> },
  { path: "/cart", element: <EcCart /> },
  { path: "/productlist", element: <EcProduct /> },
  { path: "/product", element: <EcProductDetail /> },
];

//プロジェクト番号
export const EcProjectNumber = 2;
const AnimationNumber = null;

const EcApp = () => {
  const location = useLocation();

  return (
    <div className="bg-white Yu-Mincho-Pr6N-R">
      <CartProvider>
        <EcHeader />

        <AnimatePresence mode="wait">
          <ScrollReset />
          <Routes location={location} key={location.pathname}>
            {RouteList.map((list, index) => (
              <Route key={index} {...list} />
            ))}
          </Routes>
        </AnimatePresence>
        <EcFooter />
      </CartProvider>
    </div>
  );
};

export default EcApp;

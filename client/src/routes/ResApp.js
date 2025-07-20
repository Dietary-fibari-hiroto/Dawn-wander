import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ResAbout,
  ResAccess,
  ResHome,
  ResNews,
  ResNewsDetail,
  ResReservation,
  ResReservationConfirm,
} from "../sites/res_patisserie_dawn/pages";
import ResHeader from "../sites/res_patisserie_dawn/components/layout/ResHeader";
import { ResFooter } from "../sites/res_patisserie_dawn/components";
import ScrollReset from "../shared/hooks/ScrollReset";

export const ResProjectNumber = 1;
const AnimationNumber = null;

const animation = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 0.5 },
};

const RouteList = [
  { path: "/", element: <ResHome /> },
  { path: "/about", element: <ResAbout /> },
  { path: "/access", element: <ResAccess /> },
  { path: "/news", element: <ResNews /> },
  { path: "/news/detail", element: <ResNewsDetail /> },
  { path: "/reservation", element: <ResReservation /> },
  { path: "/reservation/confirm", element: <ResReservationConfirm /> },
];

const ResApp = () => {
  const velocity = useRef(0);
  const animationFrameId = useRef(null);
  useEffect(() => {
    const scrollFactor = 3;
    const friction = 0.9; // 摩擦係数（0.9〜0.98くらいが自然）

    const handleWheel = (e) => {
      e.preventDefault();

      // スクロール量を加算（制限は後で）
      velocity.current += e.deltaY * scrollFactor;
      // 制限（最大速度を決める）
      velocity.current = Math.max(-25, Math.min(25, velocity.current));

      if (!animationFrameId.current) {
        animateScroll();
      }
    };

    const animateScroll = () => {
      if (Math.abs(velocity.current) < 0.1) {
        velocity.current = 0;
        animationFrameId.current = null;
        return; // 速度がほぼゼロなら停止
      }

      // スクロール実行（window.scrollByは相対移動）
      window.scrollBy({
        top: velocity.current,
        behavior: "auto", // イージングは自分でやるから自動はオフ
      });

      // 減衰（摩擦で速度を減らす）
      velocity.current *= friction;

      animationFrameId.current = requestAnimationFrame(animateScroll);
    };

    // スクロールの無効化（既存のブラウザ挙動抑制）
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  const location = useLocation();
  return (
    <div className="kinuta-maruminfuji-stdn">
      <ResHeader />
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
      <ResFooter />
    </div>
  );
};

export default ResApp;

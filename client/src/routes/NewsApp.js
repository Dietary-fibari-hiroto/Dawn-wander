import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const animation = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 0.5 },
};

const RouteList = [{ path: "/", element: null }];

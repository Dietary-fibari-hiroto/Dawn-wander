import { delay, easeInOut } from "framer-motion";

export const motionSet = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 1 },
};

export const resLoadingMotion = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0, scale: 2 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1, scale: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 2 },
};

export const resFirstMotion = {
  initial: { filter: "blur(100px) saturate(0%)", opacity: 0, scale: 2 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1, scale: 1 },
  exit: { filter: "blur(100px) saturate(0%)", opacity: 0 },
  transition: { duration: 2 },
};

export const sectionImgMotion = {
  initial: { filter: "saturate(0%)" },
  animate: { filter: " saturate(100%)" },
  exit: { filter: "saturate(0%)" },
  transition: { duration: 3 },
};

export const resTopPageMotion = {
  initial: { filter: "blur(100px) saturate(0%)", opacity: 0 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
  exit: { filter: "blur(100px) saturate(0%)", opacity: 0 },
  transition: { duration: 2 },
};

export const ecFirstMotion = {
  initial: { y: "100%", filter: "blur(10px)", opacity: 0 },
  animate: { y: "0%", filter: "blur(0px) ", opacity: 1 },
  exit: { y: "100%", filter: "blur(10px) ", opacity: 0 },
  transition: { duration: 1, delay: 1, ease: easeInOut },
};

export const ecImgFirstMotion = {
  initial: { filter: "blur(10px) saturate(0%)", opacity: 0, scale: 2 },
  animate: { filter: "blur(0px) saturate(100%)", opacity: 1, scale: 1 },
  exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
  transition: { duration: 3, ease: easeInOut },
};

export const offFirstMotion = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: {
    delay: 1,
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

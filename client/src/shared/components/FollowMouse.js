// components/MouseFollow.js
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MouseFollow({
  children,
  amount = 10,
  stiffness = 100,
  damping = 20,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = (e.clientX - rect.left - rect.width / 2) / amount;
    const offsetY = (e.clientY - rect.top - rect.height / 2) / amount;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

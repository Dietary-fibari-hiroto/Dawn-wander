import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import OffImagesRoute from "../../assets/OffImagesRoute";

export function FollowImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / 10;
    const offsetY = (e.clientY - rect.top - rect.height / 2) / 10;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[785.25px] h-[687px]"
    >
      <motion.img
        style={{
          x: springX,
          y: springY,
          width: "785.25px",
          height: "687px",
          borderRadius: `52% 48% 48% 52% / 48% 50% 50% 52%`,
        }}
        className="absolute top-1/2 left-0 translate-y-[-50%] z-[5]"
        src={OffImagesRoute.IMG_2847}
        //onMouseEnter={() => handleMouseEnter(38)}
      />
    </div>
  );
}

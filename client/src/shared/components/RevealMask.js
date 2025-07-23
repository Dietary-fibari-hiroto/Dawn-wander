// components/RevealMask.js
/**
 *  “透明 → 下から上にかけて徐々に見えてくる”
 */
import { useInView } from "../hooks/useInView";

const RevealMask = ({ children }) => {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`reveal-mask ${isInView ? "revealed" : ""}`}>
      {children}
    </div>
  );
};

export default RevealMask;

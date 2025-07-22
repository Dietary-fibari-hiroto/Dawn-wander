import { useEffect, useState } from "react";

const useScrollProgressForElements = (
  selector,
  startPercent = 0,
  endPercent = 100
) => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector);
      const newStates = [];

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;

        const startOffset = (startPercent / 100) * elementHeight;
        const endOffset = (endPercent / 100) * elementHeight;

        const scrollProgress = Math.min(
          Math.max((-rect.top - startOffset) / (endOffset - startOffset), 0),
          1
        );

        if (scrollProgress <= 0.2) newStates[index] = 0;
        else if (scrollProgress <= 0.4) newStates[index] = 1;
        else if (scrollProgress <= 0.6) newStates[index] = 2;
        else newStates[index] = 3;
      });

      setAnimations(newStates);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回も実行

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector, startPercent, endPercent]);

  return animations;
};

export default useScrollProgressForElements;

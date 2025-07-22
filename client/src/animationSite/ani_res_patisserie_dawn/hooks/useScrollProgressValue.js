import { useEffect, useState } from "react";

const useScrollProgressValue = (selector, endPercent = 100) => {
  const [scrollValue, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(selector);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const height = rect.height;
      const maxOffset = (endPercent / 100) * height;

      const scrollY = -rect.top;

      // 0〜endPercentの間だけ計算、範囲外はクランプ
      const clampedScroll = Math.min(Math.max(scrollY, 0), maxOffset);
      const progressRatio = clampedScroll / maxOffset;

      const currentValue = Math.round(progressRatio * 100);
      setValue(currentValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回実行

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector, endPercent]);

  return scrollValue;
};

export default useScrollProgressValue;

/**
 * 使用例
 * 
 * import useScrollProgressValue from "./hooks/useScrollProgressValue";

const MyComponent = () => {
  const progressValue = useScrollProgressValue(".target-box", 30); // 0%〜30%までで0〜100
    const progressValue2 = useScrollProgressValue(".target-box2", 30); // 0%〜30%までで0〜100
      const progressValue3 = useScrollProgressValue(".target-box3", 30); // 0%〜30%までで0〜100

  return (
    <div style={{ height: "200vh" }}>
      <div className="target-box" style={{ height: "500px", background: "#eee" }}>
        <p>スクロール進捗値: {progressValue}</p>
      </div>
    </div>
  );
};

 */

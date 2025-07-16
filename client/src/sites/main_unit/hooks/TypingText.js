import { useEffect, useState } from "react";

const TypingText = ({ text, wait = 1000, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete(); // 完了通知！
        }
      }, speed);
    }, wait); // 初期待機時間（既定1000ms）

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, wait]);

  return <pre style={{ whiteSpace: "pre-line" }}>{displayedText}</pre>;
};

export default TypingText;

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Notes = () => {
  const [trigger, setTrigger] = useState(false);
  const animation = {
    initial: { filter: "blur(10px) saturate(0%)", opacity: 0 },
    animate: { filter: "blur(0px) saturate(100%)", opacity: 1 },
    exit: { filter: "blur(10px) saturate(0%)", opacity: 0 },
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    const waitId = setTimeout(() => {
      setTrigger(true);
    }, 2000);
    return () => clearTimeout(waitId);
  }, []);

  useEffect(() => {
    const waitId = setTimeout(() => {
      setTrigger(false);
    }, 8000);
    return () => clearTimeout(waitId);
  }, [trigger]);
  return (
    <AnimatePresence>
      {trigger ? (
        <motion.div
          {...animation}
          className="Kinuta-Shin-StdN-6K section-frame flex-all-center flex-col text-white text-center space-y-[100px]"
        >
          <p>/*Notes*/</p>
          <p>
            この後に登場するサイトは、すべて実験のために制作された疑似サイトです。
            <br />
            表示される商品・ニュース・店舗情報などは、実在の企業・団体とは一切関係ありません。
            <br />
            一部に実在のように見える記述やデザインが含まれている可能性がありますが、すべてフィクションとしてお考えください。
            <br />
            閲覧中に不審な挙動があっても、個人情報が取得されることは一切ありません。
            <br />
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Notes;

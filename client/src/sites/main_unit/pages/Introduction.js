import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Introduction = () => {
  const navigate = useNavigate();
  const [x, setX] = useState("left-[20%]");
  const [text, setText] = useState(":(");

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runSteps = async () => {
    await wait(2000);
    setText(":)");
    await wait(1000);
    setX("left-[100%]");
    await wait(3000);
    navigate("/ec");
  };

  useEffect(() => {
    runSteps();
  }, []);
  return (
    <div className="bg-white section-frame text-black flex-all-center">
      {" "}
      <div
        className={`bg-white mb-[70px]  absolute z-[5] ${x} w-[70%]  space-y-[10px]`}
        style={{
          transitionProperty: "left",
          transitionDuration: "1500ms",
          transitionTimingFunction: "cubic-bezier(cubic-bezier(.68,0,.31,.98))",
        }}
      >
        {" "}
        <p className="text-[200px] ">{text}</p>
      </div>
      <div className="Kinuta-Shin-StdN-6K text-center  z-[3] tracking-[10px] leading-[30px]">
        <p className="string-lg">DAWN</p>
        <p className="string-ss">Wander</p>
      </div>
    </div>
  );
};

export default Introduction;

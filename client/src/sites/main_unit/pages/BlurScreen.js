import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BlurScreen = () => {
  const [processIndex, setProcessIndex] = useState(0);
  const [completeValue, setCompleteValue] = useState(0);
  const [completeState, setCompleteState] = useState(false);
  const intervalRef = useRef(null); // ← refはJSでも使える！

  // processIndex を 0 → 1 → 2 に遷移
  useEffect(() => {
    if (processIndex >= 2) {
      setCompleteState(true);
      return;
    }
    const timeoutId = setTimeout(() => {
      setProcessIndex((prev) => prev + 1);
      console.log("processIndex:", processIndex + 1);
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [processIndex]);

  // completeValue を 0 → 100 に増やす
  useEffect(() => {
    if (!completeState) return;

    intervalRef.current = setInterval(() => {
      setCompleteValue((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setProcessIndex((prev) => 3);
          return prev;
        }

        return prev + 1;
      });
    }, 40);

    return () => clearInterval(intervalRef.current);
  }, [completeState]);

  // UI切り替え
  if (processIndex === 0) return <div className="text-white"></div>;
  if (processIndex === 1)
    return <div className="bg-[#0079D9] section-frame text-white"></div>;
  if (processIndex === 2)
    return (
      <div className=" bg-[#0079D9] section-frame text-white flex-all-center">
        <div className="w-[70%] h-[85%] space-y-[10px]">
          <p className="text-[200px]">:(</p>
          <p className="string-md w-[1000px]">
            Your PC ran into a problem and needs to restart. We’re just
            collecting some error info, and then we'll restart for you.
          </p>
          <p className="string-lg ">{completeValue}% complete</p>
          <p className="string-sm">
            Oops — just a fake error!
            <br />
            We’re loading things in the background, so hang tight for just a
            moment.
          </p>
          <p className="string-sm">
            from dawn-waiting.com Hiroto.
            <br />
            code - 2230372
          </p>
        </div>
      </div>
    );
  if (processIndex === 3) {
    return <BlueLog />;
  }
};

const BlueLog = () => {
  const navigate = useNavigate();
  const [x, setX] = useState("left-[20%]");
  const [text, setText] = useState(":(");

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runSteps = async () => {
    await wait(2000);
    setText(":)");
    await wait(1000);
    setX("left-[60%]");
    await wait(5000);
    navigate("/notes");
  };

  useEffect(() => {
    runSteps();
  }, []);
  return (
    <div className="bg-[#0079D9] section-frame text-white flex-all-center">
      {" "}
      <div
        className={`bg-[#0079D9] mb-[70px]  absolute z-[5] ${x} w-[70%]  space-y-[10px]`}
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

export default BlurScreen;

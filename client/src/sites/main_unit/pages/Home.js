import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImagesRoute from "../../../shared/assets/images/ImagesRoute";
import TypingText from "../hooks/TypingText";

const Cmd = ({ onAllFinished }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const consoleText = [
    { text: "Dawn-waiting [Version 0.0.1]", wait: 0, speed: 100 },
    {
      text: "(c) Hiroto Corporation. All rights reserved.",
      wait: 1000,
      speed: 20,
    },
    {
      text: "　",
      wait: 1000,
      speed: 20,
    },
    {
      text: ".........",
      wait: 0,
      speed: 500,
    },
    {
      text: ">dawn-wander@0.1.0 start",
      wait: 0,
      speed: 50,
    },
    {
      text: "　",
      wait: 0,
      speed: 50,
    },
    {
      text: "checking server connection...",
      wait: 0,
      speed: 10,
    },
    {
      text: "responce - 200 177.698 ms  - 2109",
      wait: 0,
      speed: 10,
    },
    {
      text: "Compiled successfully!",
      wait: 0,
      speed: 10,
    },
    {
      text: "　",
      wait: 0,
      speed: 50,
    },
    {
      text: "Successfully connected to the server.",
      wait: 0,
      speed: 5,
    },
    {
      text: "The application is running smoothly.",
      wait: 0,
      speed: 5,
    },
    {
      text: "　",
      wait: 0,
      speed: 5,
    },
    {
      text: "Initiating project.",
      wait: 0,
      speed: 5,
    },
    {
      text: "Launching command interface.",
      wait: 0,
      speed: 5,
    },
  ];
  const handleComplete = (index) => {
    if (index === currentIndex) {
      const nextIndex = index + 1;
      setCurrentIndex(nextIndex);
      if (nextIndex === consoleText.length) {
        onAllFinished?.();
      }
    }
  };
  return (
    <div className="  section-frame flex-col text-white bg-black">
      <section className="w-full h-[50px] bg-[#444444] flex items-end justify-start">
        <div className="w-[300px] h-[40px] bg-black ml-[30px] flex items-end justify-between px-[10px]">
          <div className="flex space-x-[10px]">
            <img className="size-[30px]" src={ImagesRoute.cmd} />
            <p>コマンドプロンプト</p>
          </div>
          <p className="string-rg">×</p>
        </div>
      </section>
      <section className="p-[10px] string-sm">
        {consoleText.map((item, index) =>
          index <= currentIndex ? (
            <TypingText
              key={index}
              {...item}
              onComplete={() => handleComplete(index)}
            />
          ) : null
        )}
      </section>
    </div>
  );
};

const Cmd2 = ({ onAllFinished }) => {
  const navigate = useNavigate();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    console.log("pro:", processIndex);
    switch (processIndex) {
      case 1:
        inputRef1.current?.focus();
        break;
      case 2:
        inputRef2.current?.focus();
        break;
      case 3:
        inputRef3.current?.focus();
        break;
      case 4:
        document.activeElement.blur();
        setTimeout(() => {
          navigate("/blur");
        }, 8000);
        break;
    }
  }, [processIndex]);

  const handleKeyDown = (e) => {
    if (processIndex === 1 && !(inputValue === "y" || inputValue === "n")) {
      setInputValue("");
      inputRef1.current?.focus();
      return;
    }

    if (processIndex >= 1 && e.key === "Enter" && inputValue.trim() !== "") {
      const name = e.target.name;

      const newItem = { [name]: inputValue };
      setDataList((prev) => [...prev, newItem]);
      setInputValue("");
      setProcessIndex((prev) => prev + 1);
    }
  };

  const consoleText = [
    { text: "Welcome to dawn-wander.", wait: 2000, speed: 100 },
    {
      text: "Thank you for joining us in this study — your participation means a lot.",
      wait: 1000,
      speed: 20,
    },
    {
      text: "You’ll be completing a few tasks across three different websites.",
      wait: 1000,
      speed: 20,
    },
    {
      text: "But first, we’d like to ask you a few quick questions.",
      wait: 0,
      speed: 20,
    },
    {
      text: "　",
      wait: 0,
      speed: 50,
    },
    {
      text: "1. Is this your first time participating in this study? (y/n)",
      wait: 0,
      speed: 10,
    },
  ];
  const consoleText2 = [
    {
      text: "Thank you! Let’s get started.",
      wait: 0,
      speed: 10,
    },
    {
      text: "We hope you enjoy the experience.........",
      wait: 0,
      speed: 50,
    },
    {
      text: "　",
      wait: 0,
      speed: 100,
    },
    {
      text: "project initial:[================================================]",
      wait: 3000,
      speed: 5,
    },
    {
      text: "project start:[================================================]",
      wait: 5000,
      speed: 5,
    },
  ];
  const handleComplete = (index) => {
    if (index === currentIndex) {
      const nextIndex = index + 1;
      setCurrentIndex(nextIndex);
      if (nextIndex === consoleText.length) {
        onAllFinished?.();
        setProcessIndex((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="  section-frame flex-col text-white bg-black">
      <section className="w-full h-[50px] bg-[#444444] flex items-end justify-start">
        <div className="w-[300px] h-[40px] bg-black ml-[30px] flex items-end justify-between px-[10px]">
          <div className="flex space-x-[10px]">
            <img className="size-[30px]" src={ImagesRoute.cmd} />
            <p>コマンドプロンプト</p>
          </div>
          <p className="string-rg">×</p>
        </div>
      </section>
      <section className="p-[10px] string-sm">
        {consoleText.map((item, index) =>
          index <= currentIndex ? (
            <TypingText
              key={index}
              {...item}
              onComplete={() => handleComplete(index)}
            />
          ) : null
        )}
        {processIndex >= 1 ? (
          <div className="flex">
            <TypingText text="C:\Users\???>" />
            <input
              ref={inputRef1}
              className="appearance-none border-none outline-none bg-transparent"
              type="text"
              name="is_first"
              value={processIndex === 1 ? inputValue : dataList[0].name}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        ) : null}
        {processIndex >= 2 ? (
          <div>
            <TypingText text="2. How old are you?" wait={0} />
            <div className="flex">
              <TypingText text="C:\Users\???>" wait={2000} />
              <input
                ref={inputRef2}
                className="appearance-none border-none outline-none bg-transparent"
                type="number"
                name="old"
                value={inputValue === 2 ? inputValue : dataList[1]?.name}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        ) : null}
        {processIndex >= 3 ? (
          <div>
            <TypingText text="3. How often do you use websites?" wait={0} />
            <TypingText text="    0: Never" speed={5} />
            <TypingText text="    1: Rarely" speed={5} />
            <TypingText text="    2: Occasionally" speed={5} />
            <TypingText text="    3: Fairly often" speed={5} />
            <TypingText text="    4: Very frequently" speed={5} />
            <div className="flex">
              <TypingText text="C:\Users\???>" wait={3000} />
              <input
                ref={inputRef3}
                className="appearance-none border-none outline-none bg-transparent"
                type="number"
                name="old"
                value={inputValue === 3 ? inputValue : dataList[2]?.name}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        ) : null}
        {processIndex >= 4
          ? consoleText2.map((item, index) =>
              index <= currentIndex ? (
                <TypingText
                  key={index}
                  {...item}
                  onComplete={() => handleComplete(index)}
                />
              ) : null
            )
          : null}
      </section>
    </div>
  );
};

const Home = () => {
  const [isAllFinished, setIsAllFinished] = useState(false);
  return (
    <div className="relative section-frame">
      <div className="absolute top-0 z-[1]">
        <Cmd onAllFinished={() => setIsAllFinished(true)} />
      </div>
      {isAllFinished ? (
        <div className="absolute z-[3]">
          <Cmd2 onAllFinished={() => setIsAllFinished(true)} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;

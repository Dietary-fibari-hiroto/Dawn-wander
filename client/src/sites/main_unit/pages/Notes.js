import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Click_to, Wander_logo } from "../../../shared/components";
import { useUser } from "../../../shared/contexts/UserContext";

const Note = () => {
  const navigate = useNavigate();
  const { proccessIndex, trialOrder } = useUser();

  useEffect(() => {
    console.log(proccessIndex);
  }, [proccessIndex]);

  const handleStart = (e) => {
    e.preventDefault();
    console.log("proccess:", proccessIndex, "trialOrder:", trialOrder);
    if (proccessIndex === 1) {
      //resサイトへ遷移
      trialOrder.first === 1 && navigate("/res");
      trialOrder.first === 2 && console.log("res,アニメーションありへ遷移");
    } else if (proccessIndex === 2) {
      //ecサイトへ遷移
      trialOrder.second === 1 && navigate("/ec");
      trialOrder.second === 2 && console.log("ec,アニメーションありへ遷移");
    } else if (proccessIndex === 3) {
      //ssサイトへ遷移
      trialOrder.third === 1 && navigate("/ss");
      trialOrder.third === 2 && console.log("ss,アニメーションありへ遷移");
    }
  };

  return (
    <div
      onClick={handleStart}
      className="section-frame bg-white relative cursor-pointer"
    >
      <Wander_logo className={"absolute top-[5%] w-full"} />
      <div className="absolute-center text-center space-y-[20px]">
        <p className="string-sm tracking-[3px]">
          {proccessIndex === 1 && "First experiment"}
          {proccessIndex === 2 && "Second experiment"}
          {proccessIndex === 3 && "Third experiment"}
        </p>
        {proccessIndex === 1 && (
          <div className="flex flex-col items-center KinutaShinStdN6K space-y-[-20px]">
            <p className="string-sm">Patisserie</p>
            <p className="string-hundred">DAWN</p>
          </div>
        )}
        {proccessIndex === 2 && (
          <p className="string-hundred Yu-Mincho-Pr6N-R">Are We Still A...?</p>
        )}
        {proccessIndex === 3 && (
          <div className=" Ten-Mincho-Regular string-hundred space-y-[-50px] flex flex-col ">
            <div className="inline-block">
              <p className="pr-[200px]">Shutter</p>
              <div className="off-horizontal-border" />
            </div>
            <div className="inline-block">
              <p className="pl-[200px]">Showcase</p>
              <div className="off-horizontal-border" />
            </div>
          </div>
        )}
        <p className="string-sm">
          {" "}
          {proccessIndex === 1 && "飲食店公式サイト"}
          {proccessIndex === 2 && "ECサイト"}
          {proccessIndex === 3 && "Webアプリ,ランディングページ"}
        </p>
      </div>
      <Click_to className={"absolute bottom-[25%] w-full"} />
    </div>
  );
};

export default Note;

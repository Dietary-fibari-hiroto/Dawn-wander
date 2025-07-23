import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Click_to, Wander_logo } from "../../../shared/components";
import { useUser } from "../../../shared/contexts/UserContext";
import { createUserTrial } from "../../../api/userTrial";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const Note = () => {
  const navigate = useNavigate();
  const { userId, proccessIndex, trialOrder } = useUser();
  const { setUser_trialId } = useSurvery();

  useEffect(() => {
    console.log(proccessIndex);
  }, [proccessIndex]);

  const handleUserTrial = async (operation_id) => {
    const formData = {
      user_id: userId,
      project_id: proccessIndex,
      operation_id: operation_id,
    };

    try {
      const res = await createUserTrial(formData);
      setUser_trialId(res.id);
      console.log("re.id:", res.id);
    } catch (error) {
      console.log("error");
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    console.log("proccess:", proccessIndex, "trialOrder:", trialOrder);
    if (proccessIndex === 1) {
      //resサイトへ遷移
      trialOrder.first === 1 && navigate("/res");
      trialOrder.first === 2 && navigate("/ani/res/loading");
      handleUserTrial(trialOrder.first);
    } else if (proccessIndex === 2) {
      //ecサイトへ遷移
      trialOrder.second === 1 && navigate("/ec");
      trialOrder.second === 2 && navigate("/ani/ec/loading");
      handleUserTrial(trialOrder.second);
    } else if (proccessIndex === 3) {
      //ssサイトへ遷移
      trialOrder.third === 1 && navigate("/off");
      trialOrder.third === 2 && navigate("/ani/off");
      handleUserTrial(trialOrder.third);
    } else if (proccessIndex === 4) {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLScwmUEsPItHwtnw_Zi0gGPvrMdF4iWV0Wa1vCzGdpOvoqi2FA/viewform?usp=header";
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
          {proccessIndex === 4 && "end"}
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
        {proccessIndex === 4 && (
          <p className="string-hundred Yu-Mincho-Pr6N-R">Danw-wander</p>
        )}
        <p className="string-sm">
          {" "}
          {proccessIndex === 1 && "飲食店公式サイト"}
          {proccessIndex === 2 && "ECサイト"}
          {proccessIndex === 3 && "Webアプリ,ランディングページ"}
          {proccessIndex === 4 &&
            "ご協力ありがとうございました。アンケートに進んでいただきます。"}
        </p>
      </div>
      <Click_to className={"absolute bottom-[25%] w-full"} />
    </div>
  );
};

export default Note;

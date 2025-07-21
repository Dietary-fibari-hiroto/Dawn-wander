import { OffSectionTitle, LinkButton } from "../components";
import { useSurvery } from "../../../shared/contexts/SurveryContext";
import { useNavigate } from "react-router-dom";
import { handleTrialSubmit } from "../../../shared/handlers/handleTrial";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
const pageId = 19;

const OffGate = () => {
  //ページビューの保存
  const { user_trialId } = useSurvery();
  const pageview_id = useStayDurationHandler(pageId, user_trialId);

  useUpdateStayDurationHandler((duration) => {
    console.log("滞在時間:", duration);
  }, pageview_id);

  const { handleMouseEnter, handleMouseLeave } = useHover_eventHandler(
    user_trialId,
    pageview_id
  );
  const navigate = useNavigate();

  return (
    <div>
      <section className="section-frame flex-all-center flex-col space-y-[100px]">
        <OffSectionTitle>
          <span className="string-big">登録</span>
          <span>register</span>
        </OffSectionTitle>
        <div className="">
          <div>
            <p className="string-rg">email</p>
            <input className="w-[700px] h-[50px]" type="text" />
          </div>
          <div>
            <p className="string-rg">password</p>
            <input className="w-[700px] h-[50px]" type="text" />
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => handleTrialSubmit({ e, user_trialId, navigate })}
          className={`string-sm w-[300px] h-[50px] rounded-[25px] bg-[#364A5E] flex justify-center items-center underline`}
        >
          <p>登録...</p>
          <p>→</p>
        </button>
      </section>
    </div>
  );
};

export default OffGate;

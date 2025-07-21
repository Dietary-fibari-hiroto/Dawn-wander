import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { SectionTitle } from "../components";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 6;

const ResNewsDetail = () => {
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
  const location = useLocation();
  const data = location.state || {};
  return (
    <div className="text-white py-[100px]">
      <SectionTitle title={data.date} titleJp={data.title} />
      <div className="flex-all-center flex-col space-y-[100px] py-[100px]">
        <img className="w-[1000px] h-[600px]" src={data.img} />
        <p className="w-[700px] h-auto " style={{ whiteSpace: "pre-line" }}>
          {data.text}
        </p>
        <Link to="/res/news" className="underline string-md">
          News一覧へ戻る
        </Link>
      </div>
    </div>
  );
};
export default ResNewsDetail;

import ResNewsDatas from "../constants/ResNewsDatas";
import { NewsBar, SectionTitle } from "../components";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 5;

const ResNews = () => {
  const { user_trialId } = useSurvery();
  const pageview_id = useStayDurationHandler(pageId, user_trialId);

  useUpdateStayDurationHandler((duration) => {
    console.log("滞在時間:", duration);
  }, pageview_id);

  const { handleMouseEnter, handleMouseLeave } = useHover_eventHandler(
    user_trialId,
    pageview_id
  );
  return (
    <div className="py-[200px] ">
      <SectionTitle title="News" titleJp="お知らせ" />

      <div className="flex flex-col items-center justify-start space-y-[100px]">
        {ResNewsDatas.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
          >
            <NewsBar {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResNews;

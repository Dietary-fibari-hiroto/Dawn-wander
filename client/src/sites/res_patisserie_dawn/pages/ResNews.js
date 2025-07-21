import ResNewsDatas from "../constants/ResNewsDatas";
import { NewsBar, SectionTitle } from "../components";
import { useStayDurationHandler } from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 5;

const ResNews = () => {
  const { user_trialId } = useSurvery();
  useStayDurationHandler(() => {}, pageId, user_trialId);
  return (
    <div className="py-[200px] ">
      <SectionTitle title="News" titleJp="お知らせ" />

      <div className="flex flex-col items-center justify-start space-y-[100px]">
        {ResNewsDatas.map((item, index) => (
          <NewsBar {...item} />
        ))}
      </div>
    </div>
  );
};
export default ResNews;

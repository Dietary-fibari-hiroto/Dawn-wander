import { useStayDurationHandler } from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";
const pageId = 9;

const EcLoading = () => {
  //ページビューの保存
  const { user_trialId } = useSurvery();
  useStayDurationHandler(() => {}, pageId, user_trialId);
};

export default EcLoading;

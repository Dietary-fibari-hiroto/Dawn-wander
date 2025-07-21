import { updateTrialFinish } from "../../api/userTrial";

export const handleTrialSubmit = async ({ e, user_trialId, navigate }) => {
  e.preventDefault();
  try {
    const res = await updateTrialFinish(user_trialId);
    navigate("/question");
  } catch (error) {
    console.log("updateTrialFinishエラー");
  }
};

import axiosInstance from "./axiosInstance";

export const createUserTrial = async (formData) => {
  const res = await axiosInstance.post("/user_trial", { ...formData });
  return res.data;
};

export const updateTrialFinish = async (trialId) => {
  const res = await axiosInstance.put(`/User_trial/${trialId}`);
  return res.data;
};

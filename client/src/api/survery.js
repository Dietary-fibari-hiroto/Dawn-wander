import axiosInstance from "./axiosInstance";

export const createPageview = (formData) => {
  const res = axiosInstance.post("/pageview", { ...formData });
  return res.data;
};

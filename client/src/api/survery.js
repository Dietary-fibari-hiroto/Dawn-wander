import axiosInstance from "./axiosInstance";

export const createPageview = async (formData) => {
  const res = await axiosInstance.post("/pageview", { ...formData });
  return res.data;
};
export const updateStaingtime = async (element_id, formData) => {
  const res = await axiosInstance.put(`/pageview/${element_id}`, {
    ...formData,
  });
  return res.data;
};

export const createClickevent = async (formData) => {
  const res = await axiosInstance.post("/clickevent", { ...formData });
  return res.data;
};

export const createHover_event = async (formData) => {
  const res = await axiosInstance.post("/hover_event", { ...formData });
  return res.data;
};

export const taskresult = (formData) => {
  const res = axiosInstance.post("/taskresult", { ...formData });
  return res.data;
};

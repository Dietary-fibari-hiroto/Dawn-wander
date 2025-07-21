import axiosInstance from "./axiosInstance";

export const getUsers = async () => {
  const res = await axiosInstance.get("/user");
  return res.data;
};

export const createUser = async (formData) => {
  const res = await axiosInstance.post("/user", { ...formData });
  return res.data;
};

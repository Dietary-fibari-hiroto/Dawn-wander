import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://localhost:7002/api",
  withCredentials: true,
});

export default axiosInstance;

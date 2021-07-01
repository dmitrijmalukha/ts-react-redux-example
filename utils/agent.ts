import axios, { AxiosRequestConfig } from "axios";
import { getFromLocalStorage } from "./localStorage";

const agent = axios.create({
  baseURL: "/api/v1",
});

agent.interceptors.request.use((config) => {
  const token = getFromLocalStorage("token");
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  };
});

function request({ method, url, data }: AxiosRequestConfig) {
  return agent({
    method,
    url,
    data,
  });
}
export default request;

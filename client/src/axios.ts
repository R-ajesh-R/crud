import axios, { InternalAxiosRequestConfig } from "axios"
import { serverURL } from "./config";
export const AxiosInstance = axios.create({
    // withCredentials: true,
    baseURL: serverURL,
    headers: {
        "Content-Type": "application/json"
    }
});

AxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any): Promise<any> => {
      return Promise.reject(error);
    }
  );

import axios from "axios";
import JwtService from "./jwt.service";

const ApiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

ApiClient.interceptors.request.use(
  (config) => {
    const token = JwtService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      JwtService.destroyToken();
    }
    return Promise.reject(error);
  }
);

const ApiService = {
  get(url: string) {
    return ApiClient.get(url);
  },
  post(url: string, data: any) {
    return ApiClient.post(url, data);
  },
  put(url: string, data: any) {
    return ApiClient.put(url, data);
  },
  delete(url: string) {
    return ApiClient.delete(url);
  },
};

export default ApiService;

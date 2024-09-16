import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const BASE_URL = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "allowedHeaders": "*",
  },
});

/*
BASE_URL.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem("tokenUser");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BASE_URL.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/validation/login/" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          if (originalConfig.url === "/validation/refresh/") {
            window.sessionStorage.clear();
            window.sessionStorage.setItem("log_out", true);
            return (window.location.href = "/login");
          }
          const res = await BASE_URL.post("/validation/refresh/", {
            refresh: window.sessionStorage.getItem("refresh"),
          });
          window.sessionStorage.setItem("tokenUser", res.data.access);
          return BASE_URL(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

*/

export default BASE_URL;

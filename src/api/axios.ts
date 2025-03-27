import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      // user not authenticated
    }
    return Promise.reject(error);
  }
);

const setTokenHeader = async (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeTokenHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export { setTokenHeader, removeTokenHeader };

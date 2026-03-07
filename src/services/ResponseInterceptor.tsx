import axios, { AxiosError, AxiosHeaders, type AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import httpConstant from "../constants/HttpConstants";

interface CustomAxiosRequestConfig {
  headers: AxiosHeaders
  _retry?: boolean;
}

const Logout = () => {
    const navigate = useNavigate();
    localStorage.clear();
    navigate('/');
}

const ResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use((response) => response, async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error?.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem("refreshToken");

          const res = await axios.post(
            httpConstant.REFRESH_TOKEN.url,
            { refreshToken }
          );

          const newAccessToken = res.data.accessToken;

          localStorage.setItem("accessToken", newAccessToken);

          // Update header and retry original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
          
        } catch (err) {
          Logout();
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
};

export default ResponseInterceptor;
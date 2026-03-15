import { AxiosError, AxiosHeaders, type AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import RefreshHandler from "./RefreshHandler";

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

      console.log(error);
      console.log(error.config);
      

      if (error?.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          
          await RefreshHandler();

          // Update header and retry original request
          originalRequest.headers.Authorization = localStorage.getItem("accessToken");
          return axiosInstance(originalRequest);
          
        } 
        catch (err) {
          Logout();
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
};

export default ResponseInterceptor;
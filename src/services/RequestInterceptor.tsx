import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const RequestInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

            const accessToken = JSON.parse(localStorage.getItem("tokens") || "{}")?.accessToken ?? "default token";
            
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            };

            return config;
        },
        (error) => {
            console.log(error);
            return Promise.reject(error);
        }
    );
};

export default RequestInterceptor;

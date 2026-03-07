import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const RequestInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

            const token = localStorage.getItem("accessToken") ?? "default token";
            
            console.log("old config: ", config);            
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            };

            console.log("new config: ", config);            
            return config;
        },
        (error) => {
            console.log(error);
            return Promise.reject(error);
        }
    );
};

export default RequestInterceptor;

import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import StorageService from "./StorageService";

const RequestInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {

            const tokens = StorageService.get("tokens");
            const accessToken = tokens?.accessToken ?? "default token";
            
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

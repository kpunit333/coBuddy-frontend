import axios from "axios";
import environment from "../environment/Environment.dev";

const Api = () => {
    return axios.create({
        baseURL: environment.baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// Setup interceptors
// RequestInterceptor(Api());

export default Api;
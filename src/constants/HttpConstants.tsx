import environment from "../environment/Environment.dev";
import ApiMethods from "./ApiMethods";

const host = environment.baseURL;

const httpConstant = {
    "SAVE_POST": {
        url: `${host}/posts`,
        method: ApiMethods.POST
    },
    "GET_POST": {
        url: `${host}/posts`,
        method: ApiMethods.GET
    },
    "LOGIN" : {
        url: `${host}/login`,
        method: ApiMethods.POST
    },
    "REGISTER" : {
        url: `${host}/login`,
        method: ApiMethods.POST
    },
    "REFRESH_TOKEN" : {
        url: `${host}/login`,
        method: ApiMethods.POST
    }
}

export default httpConstant;
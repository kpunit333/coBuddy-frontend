import ApiMethods from "../constants/ApiMethods";
import ApiHandler from "../services/ApiHandler";

export const get = (urlKey: string, pathVariable?: string, queryObj?: object) => {
    const res = ApiHandler(urlKey, ApiMethods.GET, pathVariable, queryObj, undefined);
    return res;
}

export const post = (urlKey: string, pathVariable?: string, body?: object, headers?: object) => {
    const res = ApiHandler(urlKey, ApiMethods.POST, pathVariable, undefined, body, headers);
    return res;
}
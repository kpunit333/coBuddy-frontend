import axios from 'axios';
import ApiHandler from '../services/ApiHandler';
import environment from '../environment/Environment';
import httpConstant from '../constants/HttpConstants';

const useGet = async (urlKey: string, queryObj?: object) => {
    const res = await ApiHandler(urlKey, queryObj, undefined);
    return res;

    // const target = httpConstant[urlKey];
    // const url = target?.url;
    // // const method = target?.method;

    // const api = axios.create({
    //     baseURL: environment.baseURL,
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // })

    // const res = await api.get(url);
    // return res.data;
}

export default useGet;

import ApiHandler from '../services/ApiHandler';

const useGet = (urlKey: string, queryObj?: object) => {
    const res = ApiHandler(urlKey, queryObj, undefined);
    return res;
}

export default useGet;

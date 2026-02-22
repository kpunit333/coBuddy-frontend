import ApiHandler from '../services/ApiHandler';

const useGet = async (urlKey: string, queryObj?: object) => {
    const res = await ApiHandler(urlKey, queryObj, undefined);
    return res;
}

export default useGet;

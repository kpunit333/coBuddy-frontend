import ApiHandler from '../services/ApiHandler';

const usePost = async (urlKey: string, body?: object) => {
    const res = await ApiHandler(urlKey, undefined, body);
    return res;
}

export default usePost;

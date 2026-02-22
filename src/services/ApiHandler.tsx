import ApiMethods from '../constants/ApiMethods';
import httpConstant from '../constants/HttpConstants';
import Api from './Api';

const convertToQueryParams = (obj) => {
  return Object.keys(obj)
    .filter(key => obj[key] !== undefined && obj[key] !== null)
    .map(key => {
      const value = obj[key];

      // Handle arrays
      if (Array.isArray(value)) {
        return value
          .map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
          .join("&");
      }

      // Handle nested objects
      if (typeof value === "object") {
        return Object.keys(value)
          .map(subKey => 
            `${encodeURIComponent(`${key}[${subKey}]`)}=${encodeURIComponent(value[subKey])}`
          )
          .join("&");
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

const ApiHandler = async (urlKey: string, queryObj?: object, body?: object) => {

    const target = httpConstant[urlKey];
    const url = target?.url;
    const method = target?.method;

    let host = `${url}`;

    if(queryObj){
        const queryParams = convertToQueryParams(queryObj);
        host = `${host}?${queryParams}`;
    }
    
    const api = Api();

    switch(method){
        case ApiMethods.GET:
            { 
                const response = await api.get(host, queryObj);
                return response;
                break;
            }

        case ApiMethods.POST:
            break;

        default:
            break;
    }

    
}



export default ApiHandler;

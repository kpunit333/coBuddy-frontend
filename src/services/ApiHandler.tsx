import ApiMethods from '../constants/ApiMethods';
import httpConstant from '../constants/HttpConstants';
import { useLoader } from '../providers/LoaderProvider';
import Api from './Api';
import RequestInterceptor from './RequestInterceptor';
import ResponseInterceptor from './ResponseInterceptor';

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const goToSleep = async(duration: number) => {
  await sleep(duration*1000);
}

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

const ShowLoader = (value: boolean) => {
  const { setShowLoader } = useLoader();
  setShowLoader(value);
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
    RequestInterceptor(api);
    ResponseInterceptor(api);

    
    switch(method){
      case ApiMethods.GET:
        {
          // ShowLoader(true);
          const response = await api.get(host, queryObj);
          goToSleep(2);
          // ShowLoader(false);
          return response.data;
          break;
        }

      case ApiMethods.POST:
        {
          const response = await api.post(host, body);
          return response.data;
          break;
        }
        break;

      default:
        break;
    }

    
}



export default ApiHandler;

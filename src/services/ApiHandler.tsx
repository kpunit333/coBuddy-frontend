/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiMethods from '../constants/ApiMethods';
import httpConstant from '../constants/HttpConstants';
import environment from '../environment/Environment';
import AxiosInstance from './AxiosInstance';
import RequestInterceptor from './RequestInterceptor';
import ResponseInterceptor from './ResponseInterceptor';

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const goToSleep = async (duration: number) => {
  await sleep(duration * 1000);
}

const convertToQueryParams = (obj: any) => {
  return Object.keys(obj)
    .filter(key => obj[key] !== undefined && obj[key] !== null)
    .map(key => {
      const value = obj[key];

      // Handle arrays
      if (Array.isArray(value)) {
        return value
          .map((item: any) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
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

const ApiHandler = async (urlKey: string, method: string, pathVariable?: string, queryObj?: object, body?: object) => {

  const baseURL = environment.baseURL;

  const endpoint = httpConstant[urlKey];

  let host = `${baseURL}/${endpoint}`;

  if (pathVariable) {
    host = `${host}/${pathVariable}`;
  }

  if (queryObj) {
    const queryParams = convertToQueryParams(queryObj);
    host = `${host}?${queryParams}`;
  }

  const api = AxiosInstance();

  RequestInterceptor(api);
  ResponseInterceptor(api);

  await goToSleep(5);

  try {
    switch (method) {
      case ApiMethods.GET:
        {
          const response = await api.get(host, queryObj);
          return response.data;
        }

      case ApiMethods.POST:
        {
          const response = await api.post(host, body);
          return response.data;
        }

      default:
        break;
    }
  } 
  catch (error) {
    console.error("API Error:", error);
  }
  finally {
    console.log("end");
  }

  return null;
}



export default ApiHandler;

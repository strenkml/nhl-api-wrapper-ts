import axios, { AxiosResponse } from "axios";

export enum BASE_URL {
  NORMAL = "https://api-web.nhle.com/v1/",
  STAT = "https://api.nhle.com/stats/rest/en/",
}

export interface IResponse<T> {
  status: number;
  data: T;
}

interface IParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IParamQueries {
  [key: string]: string;
}

interface IEndpointInfo {
  url: string;
  params: IParamQueries;
}

export async function sendGetRequest<T>(baseUrl: BASE_URL, endpoint: string, params: IParams): Promise<IResponse<T>> {
  try {
    const endpointInfo = getUrl(baseUrl, endpoint, params);
    const response: AxiosResponse<T> = await axios.get(endpointInfo.url, { params: endpointInfo.params });

    return {
      status: response.status,
      data: response.data,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.response?.status || "Unknown status"}`);
    } else {
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
}

function getUrl(baseUrl: BASE_URL, endpoint: string, params: IParams): IEndpointInfo {
  const leftOverParams: Map<string, string> = new Map();

  Object.keys(params).forEach((key) => {
    const keyToReplace = `{${key}}`;
    let value = params[key];
    if (Array.isArray(value)) {
      value = value.join(",");
    } else {
      value = value.toString();
    }

    if (endpoint.includes(keyToReplace)) {
      endpoint = endpoint.replace(keyToReplace, value);
    } else {
      leftOverParams.set(key, value);
    }
  });

  const info: IEndpointInfo = {
    url: `${baseUrl}${endpoint}`,
    params: Object.fromEntries(leftOverParams),
  };

  return info;
}

import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";

const getQueryParams = (paramArr) => {
  if (!paramArr) return "";
  const params = paramArr
    .map((param) => {
      return `${param.key}=${param.value}`;
    })
    .join("&");
  return `?${params}`;
};

const catapi = {
  get: (url, data) => axios.get(`${BASE_URL}${url}${getQueryParams(data)}`),
};

export default catapi;

import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";

const catapi = {
  get: (url) => axios.get(`${BASE_URL}${url}`),
};

export default catapi;

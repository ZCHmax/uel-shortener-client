import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.apiUrl;

export const createShortUrl = async(obj) => {
  const requestUrl = "/url";
  return axios.post(requestUrl, obj);
};

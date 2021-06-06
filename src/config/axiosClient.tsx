import axios from "axios";

const baseURL = `https://wookie.codesubmit.io`;
const token = `Wookie2019`;

/**
 * Axios client object used for the API requests with its Bearer Token
 */
const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default axiosClient;

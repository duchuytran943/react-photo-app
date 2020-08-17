import axios from "axios";
import firebase from "firebase";
import queryString from "query-string";

const axiosClient = axios.create({
  /**
   * More config please look at:
   * `https://github.com/axios/axios#request-config`
   */
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //Handle request befor send to serve
  // Ex: handle token here
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //Handle Error
    console.log("Faild to request:", error);
    throw error;
  }
);

export default axiosClient;

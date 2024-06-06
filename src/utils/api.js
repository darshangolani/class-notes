import axios from "axios";

const Api = axios.create({
  baseURL: "https://dummyjson.com",
  // headers: {
  //   "Authorization":
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  // },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("success****", config);
    config.headers["Authorization"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    return config;
  },
  function (error) {
    // Do something with request error
    // console.log("errpr********", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("r es********", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("error********", error);
    // alert(error.response.data);
    return Promise.reject(error);
  }
);

export default Api;

export const APIGET = (url) => {
  const res = Api.get(url);
  return res;
};

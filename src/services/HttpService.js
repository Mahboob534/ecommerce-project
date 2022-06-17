import axios from "axios";
import { PATHS } from "../config/routes.config";
import { ACCESS_TOKEN,IS_LOGGED_IN,BASE_URL} from "../config/variable.config";
import { Navigate } from "react-router-dom";
axios.defaults.baseURL = `http://localhost:3002`;
//axios.defaults.headers.common['Authorization']=`${ACCESS_TOKEN}`
axios.interceptors.request.use(
  (request) => {
    //console.log(request);
    return request;
  },
  (error) => {
    //console.log(error);
    return Promise.request;
  }
);

axios.interceptors.response.use(
  (response) => {
    //console.log(response);
    return response;
  },
  (error) => {
   // console.log(error);
    return Promise.response;
  }
);
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch:axios.patch,
};
export default http;

// class HttpService {
//   constructor(entity) {

//              this.instance = axios.create();
//              this.entity=entity;
//             this.baseURL =`http://localhost:3002${this.entity}`

//     this.instance.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem(ACCESS_TOKEN);
//         if (token) {
//           //  config.headers['Authorization'] = `${token}`
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
//     this.instance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//             if (error.response.status === 401) {
//                 localStorage.setItem("login", false.toString());
//                 <Navigate to={PATHS.LOGIN} replace />
//             }
//         return Promise.reject(error);
//       }
//     );
//   }
//   get(url, config) {
//     return axios.get(url, config);
//   }

//   post(url, data, config) {
//     return axios.post(url, data, config);
//   }
//   put(url, data, config) {
//     return axios.put(url, data, config);
//   }

//   patch(url, data, config) {
//     return axios.patch(url, data, config);
//   }

//   delete(url, config) {
//     return axios.delete(url, config);
//   }
// }

//export default HttpService;

// class HttpService {
//     constructor(entity) {
//         this.instance = axios.create();
//         this.entity=entity;
//          this.baseURL =`http://localhost:3002${this.entity}`

//         this.instance.interceptors.request.use(

//           (config) => {
//             let token = localStorage.getItem("token_local_key");
//             console.log(token)
//             if (token) {
//               config.headers ["x-auth-token"] = token;
//             }
//             return config;
//           },
//           (error) => {
//             return Promise.reject(error);
//           }
//         );
//         this.instance.interceptors.response.use(
//           (response) => {
//             return response;
//           },
//           (error) => {
//             if (error.response.status === 401) {
//               <Navigate to ={PATHS.LOGIN} />
//             //  this.navigate("/authentication" )
//             }
//             return Promise.reject(error);
//           }
//         );
//       }
//       get(url, config) {
//         return axios.get(url, config);
//       }

//       post(url, data, config) {
//         return axios.post(url, data, config);
//       }

//       put(url, data, config) {
//         return axios.put(url, data, config);
//       }

//       patch(url, data, config) {
//         return axios.patch(url, data, config);
//       }

//       delete(url, config) {
//         return axios.delete(url, config);
//       }
//     }

//  export default HttpService;

//const http = {
//     get:axios.get,
//     post:axios.post,
//     delete:axios.delete,
//     put:axios.put,

// };
// export default http;

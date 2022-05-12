import axios  from "axios";

axios.defaults.baseURL ='http://localhost:3002'
const http = {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put,

};
export default http;



// class HttpService {
//     constructor() {
//         axios.defaults.baseURL ='http://localhost:3002' ;
        
//         axios.interceptors.request.use((config)=>{
//             let token=localStorage.getItem(ACCESS_TOKEN)
            
//             console.log(config);
//             if(config.url ==='/auth/login'){
//                 return config
//             }
            
//         }, (error)=>{
//             return Promise.reject(error)
//         })
//         axios.interceptors.response.use((response)=>{
//             console.log('Interceptor response success', response);
            
//                 return response;
//         },(error)=>{

//             if(error.response && (error.response.data === 'Token Expired!' || error.response.data === 'Invalid Token!')) {
//                 localStorage.setItem(IS_LOGGED, false.toString());
//                 // window.location.href = 'http://localhost:3000' + PATHS.SIGN_IN;
//             } 
//             return Promise.reject(error);
//         })

//     }
//     get(url, config) {
//         return axios.get(url, config);
//     }

//     post(url, data, config) {
//         return axios.post(url, data, config);
//     }
//     put(url, data, config) {
//         return axios.put(url, data, config);
//     }

//     patch(url, data, config) {
//         return axios.patch(url, data, config);
//     }

//     delete(url, config) {
//         return axios.delete(url, config);
//     }


//     }

// export default new HttpService();
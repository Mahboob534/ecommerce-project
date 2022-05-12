import httpServer from '../services/http.service'
import { IS_LOGGED , ACCESS_TOKEN} from '../config/variable.config'

export async function Login(data){
 try{
    const response=await httpServer.post('/auth/login', data)
    localStorage.setItem(ACCESS_TOKEN,response.data.token)
    localStorage.setItem(IS_LOGGED,true.toString())
    
    return response.data;
 } catch(e){
     return Promise.reject(e)

 }
    
 
}
// export async function getData(url) {

//     try {
//         const response = await httpServer.get(url);
//         // console.log("geeet",response)

//         return response.data;
//     } catch (e) {
//         // console.log("apia",e)
//         return Promise.reject(e);
//     }
// }




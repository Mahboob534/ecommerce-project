import http from '../../services/HttpService'
import { ACCESS_TOKEN } from "../../config/variable.config";
export default function updateOneProduct(selectId,data){ 
     const header={
          headers:{
              Authorization:`${ACCESS_TOKEN}`,
          },

     }
     return http.put(`/products/${selectId}`,data,header)
} 
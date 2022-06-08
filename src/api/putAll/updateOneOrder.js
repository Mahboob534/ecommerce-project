import http from '../../services/HttpService'
import { ACCESS_TOKEN } from "../../config/variable.config";
export default function updateOneOrder(selectId,data){
     const header={
          headers:{
              Authorization:`${ACCESS_TOKEN}`,
          },
  
      }
     return http.put(`/orders/${selectId}`,data,header)
}
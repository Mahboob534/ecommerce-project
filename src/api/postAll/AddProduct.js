import http from '../../services/HttpService'
import { ACCESS_TOKEN } from "../../config/variable.config";
export default function addProduct(data){
    const header={
        headers:{
            Authorization:`${ACCESS_TOKEN}`,
        },

    }
    return http.post(`/products`,data,header)
} 
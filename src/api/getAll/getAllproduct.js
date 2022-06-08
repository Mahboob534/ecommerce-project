import http from '../../services/HttpService'

export default function gatAllProduct(){
    return http.get(`/products`)
} 
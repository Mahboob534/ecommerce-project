import http from '../../services/HttpService'

export default function deleteProduct(id){
    return http.delete(`/products/${id}`)
} 
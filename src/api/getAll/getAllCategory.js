import http from '../../services/HttpService'

export default function getAllCategory(){
    return http.get(`/category`)
} 
import http from '../../services/HttpService'

export default function getOneProducts(selectedId){
    return  http.get(`/products?id=${selectedId}`)
} 
import http from '../../services/HttpService'

export default function getOneGroupProducts(idCategory){
    return  http.get(`/products?category=${idCategory}`)
} 
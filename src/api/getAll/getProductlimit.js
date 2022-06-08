import http from '../../services/HttpService'

export default function getProductlimit(activePage,limit){
    return http.get(`/products?_page=${activePage}&_limit=${limit}`)
} 
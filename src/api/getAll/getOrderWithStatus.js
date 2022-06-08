import http from '../../services/HttpService'

export default function getOrderByStatus(selectedValue){
    return http.get(`/orders?orderStatus=${selectedValue}`)
} 
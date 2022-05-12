import http from './http.service'

export const loginUser= (data)=>{
    return http.post('/auth/login' , data)
}
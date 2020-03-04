import http from '@/util/service'

// export const getUserInfo = () =>{
//     return http.get('/index/index/getUserInfo')
// }

export function getUserInfo() {
    return http.get('/index/index/getUserInfo')
}

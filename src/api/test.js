import { Service } from '@/util/service'
/**
 * 注意！！
 * post 请求用 data
 * get  请求用 params
 * @param {*} params 
 */
export const getAreas = (params) => {
    return Service({
        url: 'index/index/fetchRegionData',
        method: 'post',
        data: params
    })
}
/**
 * 注意！！
 * post 请求用 data
 * get  请求用 params
 * @param {*} params 
 */
export const getOpenid = (params) => {
    return Service({
        url: 'index/index/getOpenid',
        method: 'get',
        params: params
    })
}
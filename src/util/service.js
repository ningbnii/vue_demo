import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant';
import { TIME_OUT_MAX, local, host } from '@/config/config'
import qs from 'qs'
let loadingInstance = null

Vue.use(Toast);

const debug = process.env.NODE_ENV !== 'production'

export const Service = axios.create({
    timeout: TIME_OUT_MAX, // 请求超时时间
    baseURL: debug ? local : host,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

Service.interceptors.request.use(config => {
    loadingInstance = Toast.loading({
        message: '加载中...',
        forbidClick: true
    });
    if (config.method == 'post') {
        config.data = qs.stringify(config.data)
    }
    console.log(config)
    return config
})
// 添加响应拦截器
Service.interceptors.response.use(res => {
    loadingInstance.close()
    if (res.data.status == 200) {
        return res.data
    } else {
        Toast(res.data.error)
    }
}, error => {
    loadingInstance.close()
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    Toast.fail('网络错误' + msg);
    return Promise.reject(error)
})
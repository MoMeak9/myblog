import axios from 'axios'
import {VueAxios} from './axios'
import store from '../store'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 异常拦截处理器
const errorHandler = (error) => {
    if (error.response.status === 401) {
        this.$Message.error({
            message: "token已过期!",
            time: 3000,
            light: false,
        })
        this.$router.push('/').then(() => {
            this.$store.state.userInfo = null
        });
    }
    return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(
    config => {
        // //加密
        // if (config.requestConfig.isEncrypt) {
        //     config.headers = {
        //         'Content-Type': 'application/json'
        //     }
        //     isEncrypt = true
        //     appId = config.requestConfig.appId
        //     secret = config.requestConfig.secret
        //     let secretData = crypt.encrypt(appId, secret, config.data)
        //     config.data = {
        //         secretData: secretData
        //     }
        // } else {
        //     isEncrypt = false
        // }
        if (store.state.token) {
            config.headers['Authorization'] = `Bearer ${store.state.token}`
        }
        return config
    }, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
    if (response.data.code === -1
        || response.data.code === -2) {
        this.$Message.error({
            message: response.data.msg
        })
        return Promise.reject(response.data.msg)
    }
    if (response.data.code === 1) {
        console.log('success')
    }
    return response.data
}, errorHandler)

const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, request)
    }
}

export default request

export {
    installer as VueAxios,
    request as axios
}

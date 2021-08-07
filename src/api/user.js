/**
 * Created by Yihui_Shi on 2021/8/7 12:46
 */
import request from '@/utils/request'
import config from '@/config'

const api = {
    login: "/api/user/login",
    register:"/api/user/register",
}

export function login(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.login,
        method: 'post',
        data: param
    })
}

export function register(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.register,
        method: 'post',
        data: param
    })
}

/**
 * Created by Yihui_Shi on 2021/8/7 12:46
 */
import request from '@/utils/request'
import config from '@/config'

const api = {
    login: "/api/user/login",
    register:"/api/user/register",
    getUserInfo:"/api/user/getUserInfo",
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
export function getUserInfo(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.getUserInfo,
        method: 'get',
        data: param
    })
}


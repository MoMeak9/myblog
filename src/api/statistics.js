/**
 * Created by Yihui_Shi on 2021/8/7 14:00
 */
import request from '@/utils/request'
import config from '@/config'

const api = {
    login: "/api/user/login",
}

export function login(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.login,
        method: 'post',
        data: param
    })
}

/**
 * 站点统计接口
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

/**
 * Created by Yihui_Shi on 2021/8/12 16:56
 */
import request from '@/utils/request'
import config from '@/config'

const api = {
    add: "/api/article/add",
    allList: "/api/article/allList",
    myList: "/api/article/myList",
    detail: "/api/article/detail", // 获取博客详情接口
    update: "/api/article/update", // 更新博客接口
    delete: "/api/article/delete",
}
export function addArticle(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.add,
        method: 'post',
        data: param
    })
}

export function queryAllArticle(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.allList,
        method: 'post',
        data: param
    })
}


/**
 * Created by Yihui_Shi on 2021/8/12 16:56
 */
import request from '@/utils/request'
import config from '@/config'

const api = {
    add: "/api/article/add",
    allList: "/api/article/allList",
    detail: "/api/article/detail", // 获取博客详情接口
    update: "/api/article/update", // 更新博客接口
    editState: "/api/article/editState",
    allArticle: "/api/article/allArticle",
    classify: '/api/article/classify',
    allClassAndTags: '/api/article/allClassAndTags'
}

export function addArticle(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.add,
        method: 'post',
        data: param
    })
}

export function queryAllList(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.allList,
        method: 'post',
        data: param
    })
}

export function queryAllArticle(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.allArticle,
        method: 'post',
        data: param
    })
}

export function queryAllArticleByClass(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.classify,
        method: 'get',
        data: param
    })
}

export function allClassAndTags(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.allClassAndTags,
        method: 'get',
        data: param
    })
}

export function getDetail(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.detail,
        method: 'post',
        data: param
    })
}

export function editState(param) {
    return request({
        requestConfig: config.requestConfig.nodejsServer,
        url: api.editState,
        method: 'post',
        data: param
    })
}

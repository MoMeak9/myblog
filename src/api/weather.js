import request from "@/utils/request";

/**
 * Created by Yihui_Shi on 2021/8/11 17:50
 */

// 城市信息查询  记得qs序列化
export function lookupCity(param) {
    return request({
        url: 'https://geoapi.qweather.com/v2/city/lookup',
        method: 'get',
        data: param
    })
}

// 实时天气
export function nowWeather(param) {
    return request({
        url: 'https://devapi.qweather.com/v7/weather/now',
        method: 'get',
        data: param
    })
}

//天气生活指数
export function indices(param) {
    return request({
        url: 'https://devapi.qweather.com/v7/indices/1d',
        method: 'get',
        data: param
    })
}


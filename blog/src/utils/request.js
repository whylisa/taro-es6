import Taro from '@tarojs/taro';
// import api from '../constants/api';
export function getJson( url, data ) {
    return Taro.request({
        url: url,
        data: data,
        method: 'GET'
    })
}
export function postJson( url, data ) {
    return Taro.request({
        url: url,
        data: data,
        method: 'POST'
    })
}

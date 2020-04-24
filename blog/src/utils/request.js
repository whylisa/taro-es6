import Taro from '@tarojs/taro';
import api from '../constants/api';
export function getJson( url, data ) {
    return Taro.request({
        url: url,
        data: data,
        method: 'GET'
    })
}
// 获取话题列表
export async function getTopicList() {
   let result = await getJson(api.getTopics)
   return result
}
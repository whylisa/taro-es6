import {getJson, postJson} from '../utils/request'
import api from '../constants/api'
// 请求首页数据
export function getTopicList(params) {
   return async dispatch => {
      let result = await getJson(api.getTopics,params)
      dispatch({type: 'getTopicList', list: result.data.data})
   }
}
// 请求下一页数据
export function getNextList(params) {
   return async dispatch => {
      let result = await getJson(api.getTopics,params)
      if(result.data.data.length > 0) {
         dispatch({type:'appendTopicList',list: result.data.data,page: params.page})
      }
   }
}
// 请求详情数据
export function getTopicInfo(params) {
   return async dispatch => {
      let result = await getJson(api.getTopicsInfo+params.id,params)
      // if(result.data.success) {
         dispatch({type: 'getTopicInfo', infoData: result.data.data})
      // }
   }
}
import {getJson, postJson} from '../utils/request'
import api from '../constants/api'

export function getTopicList(params) {
   return async dispatch => {
      let result = await getJson(api.getTopics,params)
      dispatch({type: 'getTopicList', list: result.data.data})
   }
}
export function getNextList(params) {
   return async dispatch => {
      let result = await getJson(api.getTopics,params)
      if(result.data.data.length > 0) {
         dispatch({type:'appendTopicList',list: result.data.data,page: params.page})
      }
   }
}
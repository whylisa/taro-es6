import {getJson, postJson} from '../utils/request'
import api from '../constants/api'

export function getTopicList(params) {
   return async dispatch => {
      let result = await getJson(api.getTopics,params)
      console.log(result)
      return result
   }
}
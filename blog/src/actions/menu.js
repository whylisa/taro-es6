import { getTopicList } from './topicList'
// 显示抽屉
export function showDrawer() {
    return dispatch => {
        dispatch({type: 'showDrawer'})
    }
}
// 获取抽屉列表数据
export function changeCata(cata) {
    return dispatch => {
        dispatch({type: 'changeCata', currentCata:cata})
        dispatch(getTopicList({tab: cata.key,page: 1,limit: 20}))
    }
}
// 隐藏抽屉
export function hideDrawer() {
    return dispatch => {
        dispatch({type: 'hideDrawer'})
    }
}
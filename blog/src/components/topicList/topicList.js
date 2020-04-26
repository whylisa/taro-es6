import Taro, { Component } from '@tarojs/taro' 
import { ScrollView,View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {getTopicList} from '../../actions/topicList'
import Topic from './topic'

@connect(function(store) {
    return {...store.topicList,currentCata: store.menu.currentCata}
},function (dispatch) {
    return {
        getTopicList(params) {
            dispatch(getTopicList(params))
        }
    }
})
class TopicList extends Component {
    componentWillMount() {
        let { page, limit, currentCata} = this.props
        this.props.getTopicList({page,limit,type: currentCata.key})
    }
render() {
    let {list} = this.props
    console.log('----list',this.props)
    console.log('----list',list)
    return (<ScrollView>
             { list.map((item) => <Topic item={item} />) }
            </ScrollView>)
}
}

export default TopicList
import Taro, { Component } from '@tarojs/taro' 
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {getTopicList} from '../../actions/topicList'

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
    return (<View>
        <Text>{this.props.currentCata.value}</Text>    
        </View>)
}
}

export default TopicList
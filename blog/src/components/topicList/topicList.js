import Taro, { Component } from '@tarojs/taro' 
import { ScrollView,View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {getTopicList,getNextList} from '../../actions/topicList'
import Topic from './topic'

@connect(function(store) {
    return {...store.topicList,currentCata: store.menu.currentCata}
},function (dispatch) {
    return {
        getTopicList(params) {
            dispatch(getTopicList(params))
        },
        getNextList(params) {
            dispatch(getNextList(params))
        }
    }
})
class TopicList extends Component {
    componentWillMount() {
        let { page, limit, currentCata} = this.props
        this.props.getTopicList({page,limit,type: currentCata.key})
    }
    // 触发分页请求
    onScrollToLower = () => {
       console.log('到底了')
       let { page, limit, currentCata} = this.props
       this.props.getTopicList({page:(page+1),limit,type: currentCata.key})
 
    }
    render() {
    let {list} = this.props
    console.log('----list',this.props)
    console.log('----list',list)
    return (<ScrollView style={{height:'650PX'}} onScrollToLower={this.onScrollToLower} scrollY={true} >
             { list.map((item) => <Topic item={item} />) }
            </ScrollView>)
}
}

export default TopicList
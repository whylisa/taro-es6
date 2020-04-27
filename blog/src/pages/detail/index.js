import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import {connect} from '@tarojs/redux'
import {getTopicInfo} from '../../actions/topicList'

@connect(function(store) {
    return {
        topicinfo: store.topicList.topicinfo,
        replies: store.topicList.replies
    }
},function(dispatch) {
    return {getTopicInfo(params) {
        dispatch(getTopicInfo(params))
    }}
} )
class Index extends Component {

    config = {
    navigationBarTitleText: '详情'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  componentDidMount() {
      this.props.getTopicInfo({
          id: this.$router.params.topicid,
          mdrender: true
      })
  }
  componentDidShow () { }

  componentDidHide () { }

  render () {
      console.log('props:',this.props)
    return (
      <View className='index'>
          {this.props.topicinfo.title}
      </View>
    )
  }
}

export default Index

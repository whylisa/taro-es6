import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
class Index extends Component {

    config = {
    navigationBarTitleText: '详情'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  componentDidMount() {
      let id = this.$router.params.topicid
      console.log(id)
  }
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
          detail
      </View>
    )
  }
}

export default Index

import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  componentDidMount() {
  }
  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
         <Menu />
      </View>
    )
  }
}

export default Index

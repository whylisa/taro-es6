import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button} from '@tarojs/components'
import './index.less'

export default class Test extends Component {

  config = {
    navigationBarTitleText: '测试'
  }
  clickHander = () => {
    Taro.navigateTo({
        url: '/pages/index/index?age=16'
    })
  }
  render () { // 
    return (
      <View className='index'>
          <Button onClick={this.clickHander}>跳转</Button>
      Texts
      </View>
    )
  }
}

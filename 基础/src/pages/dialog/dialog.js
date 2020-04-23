import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button} from '@tarojs/components'

export default class Dialog extends Component {

  config = {
    navigationBarTitleText: 'dialog'
  }
  render () { // 
    return (
      <View className='index'>
          
      Texts
      {this.props.children}
      </View>
    )
  }
}

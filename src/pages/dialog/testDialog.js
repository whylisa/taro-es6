
import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button} from '@tarojs/components'
import Dialog from './dialog'

export default class TestDialog extends Component {

  config = {
    navigationBarTitleText: 'Testdialog'
  }
  render () { // 
    return (
      <View className='index'>
       <Dialog><Button>按钮 </Button></Dialog>
       <Dialog>你好 </Dialog>
       <Dialog>好好 </Dialog>
      </View>
    )
  }
}

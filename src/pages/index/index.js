import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: 'hr',
    test: 'kk',
    age: 18,

  }
  componentWillMount () { 
    console.log('第一次渲染 只执行一次')
  }

  componentDidMount () { 
    console.log('第一次渲染之后执行')
  }

  componentWillUnmount () {
    console.log('卸载之后执行')
   }
componentWillUpdate () {
  console.log('state数据将要更新')
}
componentDidUpdate () {
  console.log('state数据更新之后')
}
shouldComponentUpdate (nextProps, nextState) {
  //nextProps:父组件传递子组件的参数，
  //nextState:state下一次的state，
  // 一般多次调用时，提升render性能
if(nextState.name == 'hell') {
  return true
}else {
  return false 
}
  // 检查此次setState是否要进行render 调用
  console.log('state数据更新之后')
  // 判断状态时使用，
  return false

}
  componentDidShow () { 
    // 在小程序中支持
    console.log('页面显示是触发')
    this.setState({name: 'hell'})
  }

  componentDidHide () { 
    console.log('页面隐藏是触发')
  }

  render () { // 
    return (
      <View className='index'>
        <Text>{this.state.name}</Text>
        <Text>{this.state.test}</Text>
        <Text>{this.state.age}</Text>

      </View>
    )
  }
}

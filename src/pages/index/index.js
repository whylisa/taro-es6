import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './child'
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
  // 一般多次调用setState时，提升render性能
if(nextState.name == 'hell') {
  return true
}else {
  return false 
}
  // 检查此次setState是否要进行render 调用
  console.log('state数据更新之后')
  // 判断状态时使用，
  // return false

}
componentWillReceiveProps () {
  // nextProps: 下一次的props
  // 会在父组件传递给子组件的参数发生改变时触发
}
  componentDidShow () { 
    // 在小程序中支持
    console.log('页面显示是触发')
    // setState有两个参数，一个是我们的state，一个是回调函数，在回调里面可以立刻拿到刚才更新的值
    this.setState({name: 'hell'}, () => {
      console.log(this.state.name,this.state.age,this.state.test)
    }) // 状态更新一定是异步的问题
    // console.log(this.state.name) // 还是之前的值

  }

  componentDidHide () { 
    console.log('页面隐藏是触发')
  }
  test() {
    console.log('父组件传递子组件函数')
  }
  render () { // 
    let {name} = this.state
    let obj = {name: [{
      name: 1
    }]}
    return (
      <View className='index'>
        {/* h5可以这样写，小程序不行 要交on */}
        {/* <Child name={name} obj={obj} test={this.test} />  */}
        <Child name={name} obj={obj} ontest={this.test} /> 

      </View>
    )
  }
}

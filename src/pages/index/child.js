import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Child extends Component {
    componentWillReceiveProps(nextProps) {
        // nextProps: 下一次的props
        // 会在父组件传递给子组件的参数发生改变时触发也就是props进行数据更新是执行
        console.log("nextProps:"+ JSON.stringify(nextProps) )

        // console.log("nextProps:"+ nextProps.name)
    }
    cl = ()=> {
        this.props.test()
    }
  render() {
      let {name,obj} = this.props
      return (
      <View onClick={this.cl}> 我是子节点{name,obj.name[0].name}</View>
      )
  }
}
Child.defaultProps = {
    //父组件初始值为undefined 才会拿这里面的默认数据，是null不行
}
export default Child
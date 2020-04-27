import Taro, { Component, request } from '@tarojs/taro' 
import { View, Text, Button, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import aside from '../../assets/img/aside.png'
import './menu.less'
import { showDrawer, changeCata, hideDrawer } from '../../actions/menu'
import { AtDrawer } from 'taro-ui'
@connect(function(store){
    return {...store.menu}
},function(dispatch) {
    return {showMenu() {
        dispatch(showDrawer())
    },changeCata(cata) {
        dispatch(changeCata(cata))
    },hideDrawer() {
        dispatch(hideDrawer())
    }}
})
class Menu extends Component {
// 显示抽屉
 showDrawer = () => {
     this.props.showMenu&&this.props.showMenu();
 }
 // 关闭抽屉
 closeDrawer = () => {
    this.props.hideDrawer&&this.props.hideDrawer();
     
 }
 // 显示抽屉列表
 getItems = (cataData) => {
   return  cataData.map(item => item.value)
 }
 // 点击分类是触发
 chickCata = (index) => {
     let { cataData } = this.props
     let clickData = cataData[index] // 获取点击项的数据
     if(clickData.key !== this.props.currentCata.key) {
        this.props.changeCata&&this.props.changeCata(clickData); // 点击分类触发切换分类方法
     }
 }
render() {
    let { showDrawer, cataData} = this.props
    console.log(this.props)
    return (
    <View className='topicsList-menu'>
        <AtDrawer onClose={this.closeDrawer} onItemClick={this.chickCata} style='position: absolute' show={showDrawer} items={this.getItems(cataData)} />
        <Image onClick={this.showDrawer} className='image' src={aside} />
        <Text>{this.props.currentCata.value}</Text>
        <Image className='image' src={require('../../assets/img/people.png')} />
    </View>
    )
}
}

export default Menu
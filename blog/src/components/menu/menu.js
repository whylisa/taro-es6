import Taro, { Component, request } from '@tarojs/taro' 
import { View, Text, Button, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import aside from '../../assets/img/aside.png'

import './menu.less'
class Menu extends Component {
render() {
    return (
    <View className='topicsList-menu'>
        <Image className='image' src={aside} />
        <Text> 全部</Text>
        <Image className='image' src={require('../../assets/img/people.png')} />
        
    </View>
    )
}
}

export default Menu
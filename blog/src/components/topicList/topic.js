import Taro, { Component } from '@tarojs/taro' 
import { View, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { myTimeToLocal } from '../../utils/date'
class Topic extends Component {

goToDetail(item){
  console.log(1)
  console.log(item)
  Taro.navigateTo({url:'/pages/detail/index?topicid='+item.id})
}
render() {
    let {item} = this.props
    return (
    <View  className='topicList-topic' onClick={this.goToDetail.bind(this,item)} >
        <Image className='head-img' src={item.author.avatar_url} />
        <View className='right'>
            <View className='topic-title'>
                {item.top?<Text className='topic-up'>置顶</Text>:(item.tap=='share'?<Text className='topic-up blue'>分享</Text>:<Text className='topic-up blue'>问答</Text>)}
                
                <Text>{item.title}</Text>

            </View>
            <View className='topic-info'>
            <Text>{item.author.loginname}</Text>
            <Text>{item.reply_count+ "/" +item.visit_count}</Text>
            <Text>创建时间{myTimeToLocal(item.create_at)}</Text>
            </View>
        </View>
    </View>)
}
}

export default Topic

12
21
23
24
12
24
21
8
15
23
20
16
24
18
18
12
18
16
7
7








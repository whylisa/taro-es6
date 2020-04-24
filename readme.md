### 安装
  - 安装taro开发工具 @taro/cli yarn global add @tarojs/cli 
  - 使用：taro init myTaro
  - 下载微信开发者工具
### 生命周期 state
  - 状态更新一定是异步的
  - react 的状态更新不一定是异步的，更新数据必须使用setState方法，直接赋值不会更新组件
### props 
  - 和react 一致 在传递函数的时候前面必须加on,不然小程序会报错
### 路由功能及资源引用
  - 在taro中，路由功能是默认自带的，不需要开发者进行额外的路由配置
  - 这里相当于通过小程序的配置适配了小程序和h5的路由问题
  - taro默认根据配置路径生成Route  小程序有五层
  - 我们只需要在入口文件的config配置中指定好pages，然后就可以在代码中通过Taro提供的APi来跳转到目的页面
     - taro.navigateTo({url: '/pages/index/index'})
     - taro.redirectTo()：页面重定向，没有返回箭头
  - 路由传参：
     - 我们可以通过在所有跳转的url后面添加查询字符串在进行跳转传参
     - 例如： id=2&type=test
     ```js
       Taro.navigateTo({
         url: '/pages/page/path/name?id=2&type=test'
       })
     ```
     - 这样的话，在跳转成功的目标也的生命周期方法里就能通过this.$router.params 获取到
       传的参数，例如上诉跳转，在目标也的componentWillMount生命周期里获取入参
### 资源引用
   - 在taro中可以像使用webpack那样自由的引用静态资源，而且不需要安装任何loader
   - 引用样式文件
   - 可以直接通过es6的import 语法来引用样式文件js文件
   - 引用图片、音频、字体等文件同上 <Image />
      - 也可以用require({'../path'})来引用，只有本地文件才可以这样做，如果是线上的直接赋值即可
### 条件渲染、列表渲染
      - 短路表达式：|| 小程序在短路表达式渲染时，会出现true或者false的短暂出现，所以要适配小程序，最好使用三元表达式进行判断
      - 三元表达式：比较通用的一种方式，jsx语法是不支持if操作符，所以只能用三元表达式或者短路表达式
      - 列表渲染:
         ```js
           {
             list.map( (item, index) => {
               //里面不能写if/else
               return (<View key={item.is}><Text>item.name</Text></View>)
             })
           }
         ```
### chilren 传递
     - {this.props.children} 
        - 不能对他进行任何操作
        - 如果要操作自定义属性，要在父级引入的子组件的标签里面传值，
          - <Dialog s={1}>  子组件 this.props.s
### 事件
    - 使用驼峰
    - 注意this的指向，bind(this) ,或者箭头函数
    - 阻止事件冒泡：默认事件参数event默认在函数参数的最后  
### 环境变量
    - process.env.TARO_ENV
    - 可以根据环境的不同来兼容不同的文件

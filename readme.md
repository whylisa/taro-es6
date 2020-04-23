### 安装
  - 安装taro开发工具 @taro/cli yarn global add @taro/cli 
  - 使用：taro init myTaro
### 生命周期 state
  - 状态更新一定是异步的
  - react 的状态更新不一定是异步的，更新数据必须使用setState方法，直接赋值不会更新组件
### props 
  - 和react 一致
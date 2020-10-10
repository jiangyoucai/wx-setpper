# wx-setpper
微信小程序数量加减组件(a setpper for wechat mini programs)

# 使用

1.复制文件

    复制plugin/components/stepper文件夹到项目中

2.引入组件

    pages/index/index.json文件里，增加
    
    {
    "usingComponents": {
    "calendar": "your path/stepper"
    }

3.使用组件

    pages/index/index.wxml文件里，增加
    
    <calendar option="{{option}}" bind:setTotal="setTotal"/>

4.配置文件

    pages/index/index.js文件里，增加

    option: {
      min: 1,
      max: 9,
      increment: 1,
    }
    
# 配置

1.最小
    
    min: 1 // 最小值

2.最大

   max: 9 // 最大值

2.增量
  
    increment: 1 // 增量值

# 方法

1.选中日期

    setTotal: function (e) {
        console.log(e)
    }

   
# 截图

![加减组件](http://cdn.tiantour.com/screenshot/stepper.png)
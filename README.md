# vue-pic-magnifier
这是封装的一个图片放大镜的vue组件
## 开始
***
```
# 安装依赖
npm install vue-pic-magnifier --save
# 引入
import VuePicMagnifier from 'vue-pic-magnifier'
import 'vue-pic-magnifier/lib/vue-pic-magnifier.css'
Vue.use(VuePicMagnifier)
```
## 参数
***
| 参数 | 类型 | 必填 | 说明 |
|:------:|:------:|:------:|:------:|
| url | String | Y | 图片地址 |
| scale | Number | N | 放大倍数 |
| selectorCustomStyle | Object | N | 自定义放大镜样式 |
## 说明
***
组件的宽度在v0.1中没有具体设计，依赖于父元素的宽度，使用vue-pic-magnifier组件时候，必须在外层指定父容器，分配相应的宽度。


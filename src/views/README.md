## 路由级视图组件


#### 推荐两种代码组织方式：
- 以单个视图创建为目录，里面放置.vue、.scss、.js、image文件等，引用时可以使用vue推荐的分离方式：<template src=""></template>、<script src=""></script>、<style lang="scss" src=""></style>
- 对于简单的视图可以直接创建.vue文件
- 需要注意的是行内样式中，也就是标签的style属性里，不支持类似background-image:url(./xxx/xxx.jpg)的形式，vue-loader无法解析。img标签的src属性，可以正常解析。在<style></style>和样式文件中，可以正常解析
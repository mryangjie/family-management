
# 家族网管理系统

> 一个由vue全家桶搭建的家族管理系统前端界面

## 项目结构

```
.
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- build
|   |-- build.js 
|   |-- check-versions.js
|   |-- logo.png
|   |-- utils.js
|   |-- vue-loader.conf.js
|   |-- webpack.base.conf.js
|   |-- webpack.dev.conf.js
|   |-- webpack.prod.conf.js
|-- config
|   |-- dev.env.js 
|   |-- helpers.js //环境配置 
|   |-- index.js  //代理配置
|   |-- prod.env.js
|-- src
|   |-- App.vue
|   |-- main.js
|   |-- assets 
|   |-- components
|   |-- mixins
|   |-- pages
|   |-- router //路由 导航守卫
|   |-- store
|       |-- utils
|           |-- helpers.js 
|           |-- HTTPS.js //接口封装 请求拦截
|-- static

```

## 技术栈
* vue 2.0
* vue-router
* vuex
* axios
* element-ui
* es6

## 运行及构建
``` bash
# 安装
npm install

# 开发环境
npm run dev

# 测试环境
npm run test

# 打包
npm run build
```

## 开发规范
1. 组件化开发模块
2. 组件以驼峰命名 羊肉串方式使用
```javascript

    import userInfo from "./_parts/userInfo";

    <user-info></user-info>
```
3. 组件样式写在当前组件内 公用样式写在src/scss/main.scss
4. 页面加类page-view和当前页名称 class='page-view familyOverview-page'
5. scss文件需包在当前页类下
6. let/const代替var 使用箭头函数代替function等es6，

















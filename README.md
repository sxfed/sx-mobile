# sx-mobile

## Build Setup
> 使用[yarn](https://yarnpkg.com/zh-Hans/)

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

```

## 项目结构
```
├── commons             // 系统公共方法，组件
├── mock                // mock数据，截获ajax请求，便于前端单独调试
│   └── mockdata        // 模拟数据 mockjs
├── pages               // 业务页面，业务开发主要关系目录
│   ├── error           // 一些error页面，404 403 401 等等
│   ├── Demo            // 组件Demo列表
│   ├── DemoPages       // 所有Demo组件
│   └── Home            // 首页
├── redux               // redux 相关
│   ├── actions         // redux action定义
│   ├── reducers        // redux reducers定义目录
│   └── actionTypes.js  // actions 和 reducers使用的types常量
├── App.jsx             // 项目入口文件
└── global.less         // 全局样式定义

```

## 页面写法
> 项目基础框架及构建依赖 [sx-ui](https://github.com/sxfed/sx-ui)
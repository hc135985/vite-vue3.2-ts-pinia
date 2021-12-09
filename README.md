# vite + vue3.2 + ts4 + element-plus + pinia

## 前言

vite+vue3 编译速度飞一般的感觉，那必须得来尝试一波

## 开发流程

1. nvm use 16
2. npm i || yarn install
3. npm run dev

## 目录结构


```
├─build             打包目录
├─public            静态资源
├─src
|  ├─api            对请求库的封装及获取数据的方法
|  ├─components     公用组件
|  ├─assets         公共静态资源（img，js, css）  
|  ├─containers     模块，页面组件
|  ├─pages          路由及获取同步数据
|  ├─store          store配置
|  ├─utils          自定义工具函数
|  ├─routers        路由配置
|  ├─shims-vue.d.ts 自定义工具函数
├─.eslintrc.js      eslint配置
├─.gitignore        git项目管理忽略文件夹
├─tsconfig.json    ts配置
├─vite.coonfig.js  vite配置和vue.config.js类似
├
```

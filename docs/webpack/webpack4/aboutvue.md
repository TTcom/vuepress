### 简述从零搭建vue脚手架
1、首先新建一个空文件夹然后npm init -y 生成package-lock.json文件<br />
2、新建src文件新建App.vue、main.js、component文件、新建webpack.config.js文件<br />
3、安装依赖webpack webpack-cli(webpack命令解析工具) 、webpack-dev-server（开发环境）、（解析js语法）babel-loader 、(es6转es5)@babel/preset-env、（babel核心模块）@babel/core、vue-style-loader 、css-loader、vue-loader、vue-template-compiler、（处理html插件)html-webpack-plugin、（webpack合并用）webpack-merge
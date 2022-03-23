### 打包vue组件并发布npm上
 详细文档参考vue-cli 构建目标库方法 [](https://cli.vuejs.org/zh/guide/build-targets.html) 🎉 💯
- 首先在package.json文件中的"scripts"中加入"dist": "vue-cli-service build --target lib --name cascader --dest lib  ./src/components/cascader.vue", --name cascader打包的文件名称--dest lib打包的文件夹名称 后面跟的是打包的文件
- 运行打包命令npm run dist生成打包后的组件库文件dist
- 在package.json文件中的private对应的值改为false,下面增加"main": "./dist/cascader.umd.min.js","module": "./dist/cascader.umd.min.js",
- .gitignore文件中删除忽略dist的内容
- 如果不是npm官方原则需要安装nrm将npm源切换到官方源
- 登录npm账户
- npm publish命令上传项目
- npm unpublish 包名    // 删除上传的项目
- 如果package.json 里配置了 files: ["lib"]，则 npm publish 的时候只会打包 lib 目录下的文件
### package.json例子
```json
{
  "name": "afooter",
  "version": "0.1.0",
  "private": false,
  "main": "./dist/afooter.umd.min.js",
  "module": "./dist/afooter.umd.min.js",
  "files": ["lib"],
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "dist": "vue-cli-service build --target lib --name afooter --dest lib ./src/components/afooter.vue"
  },
  "dependencies": {
    "afooter": "^0.1.0",
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "sass": "^1.26.5",
    "sass-loader": "^8.0.2",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}

```
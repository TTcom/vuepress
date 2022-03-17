### 打包vue组件并发布npm上
 详细文档参考vue-cli 构建目标库方法 [](https://cli.vuejs.org/zh/guide/build-targets.html) 🎉 💯
- 首先在package.json文件中的"scripts"中加入"dist": "vue-cli-service build --target lib --name cascader  ./src/components/cascader.vue"
- 运行打包命令npm run dist生成打包后的组件库文件dist
- 在package.json文件中的private对应的值改为false,下面增加"main": "./dist/cascader.umd.min.js","module": "./dist/cascader.umd.min.js",
- .gitignore文件中删除忽略dist的内容
- 如果不是npm官方原则需要安装nrm将npm源切换到官方源
- 登录npm账户
- npm publish命令上传项目
- npm unpublish 包名    // 删除上传的项目
- 如果package.json 里配置了 files: ["dist"]，则 npm publish 的时候只会打包 dist 目录下的文件
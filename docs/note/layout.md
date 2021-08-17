### 关于连接真机进行移动端调试问题
- 地址栏输入chrome://inspect会打开设备监视页面
- 使用谷歌浏览器需翻墙才能看到手机页面，亲测可以，使用edg浏览器不用翻墙未测试过
- 可参考https://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html

### 关于移动端适配

- 使用flexible.js或hotCss.js 改js可适配不同屏幕-使用动态的HTML根字体大小和动态的viewport scale
- 安装插件postcss-plugin-px2rem该插件可将px转为rem
- 安装插件lib-flexible该插件可将根据不同的设备宽为HTML设置不同的font-size
```js
npm install postcss-pxtorem -D
npm install lib-flexible -S
```

- 如果是vue-cli3为例首先在main.js中引入flexible.js或hotCss.js
- 在根目录中新建postcss.config.js按如下格式对postcss-pxtorem进行设置
```js
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 8"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      exclude: ""
    }
  }
}

```

- 如果是vue-cli2为例首先在main.js中引入flexible.js或hotCss.js
- 在根目录中新建.postcssrc.js按如下格式对postcss-pxtorem进行设置
- 如果你的项目很老了可能需要安装指定版本的依赖
- 在package.json中安装以下依赖
```json
    "postcss-import": "11.1.0",
    "postcss-loader": "2.1.6",
    "postcss-pxtorem": "^5.1.1",
    "postcss-url": "7.3.2",
```
```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: [],
      exclude: "styles|element-ui|Front|manage|errorLog|errorPage|layout|login|components" //不需要处理的文件目录
    }
  }
}


```





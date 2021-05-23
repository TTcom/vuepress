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





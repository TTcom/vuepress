## vant移动端适配问题

1、首先vant的ui样式中的大小都是以px结尾的并是以375的屏幕为基准的，所以当我们对样式进行rem转换时就要考虑到这个问题，如果UI设计稿的屏幕大小也是375那就不能做转换区分直接如下配置：<br>
在.postcssrc.js中进行配置：
```js
module.exports = {
  "plugins": {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      exclude: "styles|element-ui|Front|manage|errorLog|errorPage|layout|login|components"    //不需要转为REM的文件名，如果项目中包含多端是配的话可以利用此配置
    }
  }
}

```

如果UI设计稿的大小和vant的设计稿的大小不一致的话，参考以下配置：

```js

const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-pxtorem");
module.exports = ({ file }) => {
  let remUnit; // 判断条件 
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) { remUnit = 37.5; } else { remUnit = 75; }
  return {
    plugins: [px2rem({ remUnit: remUnit, }),
    AutoPrefixer({ browsers: ["last 20 versions", "android >= 4.0"] })]
  };
}
//如果看到红字 warn这是因为 autoprefixer 版本问题导致的，把上面的 browsers 替换为 overrideBrowserslist 就可以了
const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-pxtorem");
module.exports = ({ file }) => {
  let remUnit; // 判断条件 请自行调整 我使用的是 mand-mobile ui 没有对vant引入进行测试 
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) { remUnit = 37.5; } else { remUnit = 75; }
  return {
    plugins: [
      px2rem({ remUnit: remUnit, }),
      AutoPrefixer({ overrideBrowserslist: ["last 20 versions", "android >= 4.0"] })]
  };
}
```

## vant样式大小转为rem后弹出框字体模糊的问题

由于设置了 transform: translate3d(-50%,-50%,0);在设置 transform时 div的宽度或者高度并不是偶数，移动50%之后，像素点并不是整数，出了小数，和显示像素没有对上，所以弹出框的字体出现了模糊问题，解决方案如下：
```js 
  position: absolute;  
  left:0 !important;             
  right:0;
  margin:auto; 
  transform: translate3d(0,0,0) !important;  //这里很重要取消了移动
```



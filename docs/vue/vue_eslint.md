### vue_eslint

在vue中使用eslint和prettier

```
首先在创建项目的时候选择eslint加prettier

如果是老项目添加的话请自行安装这两个依赖

```
在ve.config.js文件中配置自动修复eslint语法错误
```js
module.exports={
    chainWebpack: config => {
        config.module
          .rule("eslint")
          .use("eslint-loader")
          .loader("eslint-loader")
          .tap(options => {
            options.fix = true;   //设置自动修复eslint
            return options;
          });
      }
}
```
添加文件.eslintrc.js或者在package.json中的eslintConfig对象中进行配置
```js
//.eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
   // "@vue/typescript",
    "plugin:prettier/recommended" // add prettier-eslint plugin which will uses the `.prettierrc.js` config
  ],
  rules: {
    'prettier/prettier': 'error',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
   "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
   // parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ]
};
```

添加文件.prettierrc.js
```js
//.prettierrc.js
module.exports = {
    printWidth: 100, //单行最多的字符，默认80
    tabWidth: 2, // tab缩进大小,默认为2
    semi: false, //在语句结尾打印分号
    singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    bracketSpacing: true, //打印对象文字中括号之间的空格
    jsxBracketSameLine: true,
    arrowParens: 'avoid', 
    //"always" - Always include parens. Example: (x) => x
    //"avoid" - Omit parens when possible. Example: x => x
}
```
打完收工，运行看效果
### vueantic

1、$on 

用来监听组件的$emit事件，当触发某个指定的$emit事件时，触发该事件。例如：<br>
```js
created(){
 this.$on('emitname',()=>{
    dosomething
 })
}

```

2、$emit

子组件向父组件进行通信

3、$props

组件向子组件传递自身所有的props。例如：<br>
```js
<child v-bind="$props"></child>
```

4、$listeners

组件向子组件传递自身所有的$emit。可直接调用父组件所有的$emit事件向上级组件传递事件例如：<br>
```js
<child v-on="$listeners"></child>

```

5、$off或$destroy
 移除自定义事件监听器，去除组件所有的$on事件
 ```js
this.$off() 或者
this.destroy()
 ```

6、provider/inject

简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。<br>

不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。

```js
//父组件
 <template>
  <div>
<childOne></childOne>
  </div>
</template>

<script>
  import childOne from '../components/test/ChildOne'
  export default {
    name: "Parent",
    provide: {
      for: "demo"
    },
    components:{
      childOne
    }
  }
  
  //子组件
  <template>
  <div>
    {{demo}}
    <childtwo></childtwo>
  </div>
</template>

<script>
  import childtwo from './ChildTwo'
  export default {
    name: "childOne",
    inject: ['for'],
    data() {
      return {
        demo: this.for
      }
    },
    components: {
      childtwo
    }
  }
</script>

//孙子组件

<template>
  <div>
    {{demo}}
  </div>
</template>

<script>
  export default {
    name: "",
    inject: ['for'],
    data() {
      return {
        demo: this.for
      }
    }
  }
</script>

在2个子组件中我们使用jnject注入了provide提供的变量for，那么就都可以拿到for这个变量
```

7、vue-cli-service build 环境设置

::: tip <span style="color:#999;font-weight: initial;"><a href="https://blog.csdn.net/linbenjian/article/details/85261201">猛戳详细原文介绍</a></span> 🎉 💯
&ensp;                     				  
:::


使用vue-cli3打包项目，通过配置不同的指令给项目设置不一样的配置。

npm run serve时会把process.env.NODE_ENV设置为‘development’；
根目录下以.env.development文件中的配置会生效
配置参数命名必须以VUE_APP_开头
npm run build 时会把process.env.NODE_ENV设置为‘production’；
根目录下以.env.production文件中的配置会生效
配置参数命名必须以VUE_APP_开头


除以上两种方式命名外还可以自定义命名但需要声明环境且在运行时需要指明是哪一个文件
例如：
.env.prod

```js
NODE_ENV = 'production'
VUE_APP_BASE_URL = 'http://www.linbenjian.work'
```

然后在package.json文件中,example
需要在--mode后面指明文件名称，serve默认就是development
build默认是production

```json
    "serve": "vue-cli-service serve --mode",
    "dev-serve": "vue-cli-service serve --mode dev",
    "build": "vue-cli-service build --mode",
    "dev": "vue-cli-service build --mode dev",
    "uat1": "vue-cli-service build --mode uat1",
    "fat": "vue-cli-service build --mode fat",
    "stg": "vue-cli-service build --mode stg",
    "prd": "vue-cli-service build --mode prd",
    "lint": "vue-cli-service lint"

```

在项目中使用，直接通过process.env.VUE_APP_去拿
process.env.VUE_APP_BASE_URL


8、在vue中使用eslint和prettier

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
添加文件.eslintrc.js
```js
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
 





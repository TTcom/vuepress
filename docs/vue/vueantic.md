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

npm run build 时会把process.env.NODE_ENV设置为‘production’；

此时只要根据process.env.NODE_ENV设置不同请求url就可以很简单的区分出本地和线上环境。

头疼的是打包时线上环境可能分多种，比如测试环境和生产环境等等。

在vue-cli2中打包时可以修改 “build” 和 “config”中的文件来区分不同的线上环境

而vue-cli3号称0配置，无法直接修改打包文件，那么怎么区分不同的线上环境分别传入不一样的配置呢？

官网给我们做了简单介绍（vue-cli-service-build）,但只解释了现有几个指令所匹配的模式,对于上面的需求显然无法满足。

如下提供一种解决方案：
首先在package.json文件内添加测试环境和生产环境的打包指令：

```js
"build-test": "vue-cli-service build --mode alpha",
"build-prod": "vue-cli-service build --mode prod",
```

在项目根目录添加两个文件
.env.alpha

```js
NODE_ENV = 'production'
VUE_APP_BASE_URL = 'http://test.linbenjian.work'
```

.env.prod

```js
NODE_ENV = 'production'
VUE_APP_BASE_URL = 'http://www.linbenjian.work'
```


在项目中使用参数：

```js
  import axios from 'axios'
  let baseurl = process.env.VUE_APP_BASE_URL || 'http://localhost:9001'
```
 
注：

—mode后面添加test、production 等预留参数无效
配置文件内，参数添加VUE_APP 可通过调试




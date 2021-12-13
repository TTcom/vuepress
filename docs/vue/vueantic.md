### vueantic
- jsx
- https://www.cnblogs.com/ainyi/p/13324222.html
- 防抖节流函数
```js
  const debounced = (fn, deplay) => {
    let timer
    return function(args) {
      //典型的闭包函数
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.call(this, args) //传入的函数没有this，所以要使用call或apply
      }, deplay)
    }
  }
```
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
```js
 //父组件
 <son :show.sync="show"></son>
 //子组件
 this.$emit('update:show',false); 
```
3、$props

组件向子组件传递自身所有的props。例如：<br>
```js
<child v-bind="$props"></child>
```

4、$listeners
<!-- 子组件可以通过this.$listeners 获取它在父组件中绑定的事件，父组件可以通过v-on="$listeners" 把它自己在自己的父组件中绑定的事件进行传递 -->
子组件向爷爷组件发送消息可通过在父组件中绑定v-on="$listeners"进行传递
```vue
//爷爷组件

<template>
  <div id="app">
    <son @check="nowcheck"></son>
  </div>
</template>
<script>
import son from "./views/son"
export default {
  components: {
    son
  },
  methods: {
    nowcheck() {
      console.log("nowcheck")
    }
  }
}
</script>

//son.vue

<template>
  <div class="son">
    <button type="button" @click="soncheck">sonbtn</button>
    <grandson @sendmsg="grandsonmsg" v-on="$listeners"></grandson>
  </div>
</template>
<script>
import grandson from "./grandson.vue"
export default {
  name: "son",
  components: {
    grandson
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$listeners) //获取父组件中绑定的事件
    // this.$listeners.check()
  },
  methods: {
    soncheck() {
      // this.$emit("check")  //向爷爷组件传递信息
    },
    grandsonmsg() {
      console.log("grandsonmsg")
    }
  }
}
</script>
<style lang="scss" scoped></style>

//grandson.vue

<template>
  <div class="grandson">
   <button type="button" @click="tosendmsg">sonbtn</button>
  </div>
</template>
<script>
export default {
  name: "grandson",
  data() {
    return {}
  },
  mounted() {
    console.log(this.$listeners)
  },
  methods: {
    tosendmsg(){
      this.$emit("check")  //向爷爷组件传递信息
    }
  }
}
</script>
<style lang="scss" scoped></style>

可参考https://www.cnblogs.com/wjw1014/p/13739450.html
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
```
7、$attrs
子组件不用写props部分的内容就可以直接获取在父组件中绑定的所有参数吗，并可以向自己的子组件绑定v-bind="$attrs" 可通过{{$attrs.xxx}}直接获取参数值
```
8、vue-cli-service build 环境设置

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


 





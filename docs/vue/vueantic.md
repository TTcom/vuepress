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
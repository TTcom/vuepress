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

6、
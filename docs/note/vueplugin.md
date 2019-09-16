## vuex-persist数据持久化
::: tip vuex-persist
   Vuex持久化存储之<a href="https://github.com/championswimmer/vuex-persist" target="view_window">vuex-persist</a></span> 🎉 💯
:::
```js
1、持久化所有的状态
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
const store = new Vuex.Store<State>({
  state: { ... },
  mutations: { ... },
  actions: { ... },
  plugins: [vuexLocal.plugin]
})
or
const store = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  plugins: [vuexLocal.plugin]
}
2、持久化部分状态
const store = {
    state,
    getters,
    actions,
    mutations,
    plugins:[
        new VuexPersistence({
            reducer: state => ({
                query: state.query //这个就是存入localStorage的值
            }),
			storage: window.sessionStorage
        }).plugin
    ]
}
3、vuex中action的作用可以记录用户每次的操作，可以配合开发工具进行时光穿梭，可以操作多个mutation;

```

## vue-skeleton-webpack-plugin骨架屏
首先在vue.config.js中进行配置
```js
let skeleton = require('vue-skeleton-webpack-plugin'); 

const path = require('path');
module.exports = {
    configureWebpack: {
        plugins: [
            new skeleton({
                 webpackConfig: {
					 entry: {
						 app: path.resolve('./src/entry.js')   //骨架屏渲染的内容
					 }
                 }
            })
        ]
    }
  }

```

## vue的预渲染插件prerender-spa-plugin
```js
vue的路由模式需要是hash模式
在vue.config.js中进行配置
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
module.exports = {
    configureWebpack: {
        plugins: [

			 new PrerenderSPAPlugin({
						staticDir: path.join(__dirname, 'dist'),
						routes: [ '/', '/about',],  //需要预渲染的路由地址
			     })
			
			
			
        ]
    }
  }



```

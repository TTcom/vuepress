## vuex-persist
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

```

## vuex-asfasft
::: tip test
   vuex-asfasft<a href="https://github.com/championswimmer/vuex-persist" target="view_window">vuex-persist</a></span> 🎉 💯
:::


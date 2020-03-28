### 在vue中如何设置按钮的权限

#### 可通过自定义指令的方式进行按钮权限管理

可在main.js文件中引入以下代码片段

```js

vue.directive('display-key',{
      inserted(el,binding){
          let displaykey = binding.value;
          if(displaykey){
              let hs = checkArray(displaykey)  //checkArray是一个返回数组中是否包含该参数的一函数
              if(!hs){
                  el.parentNode && el.parentNode.removeChild(el);;
              }
          }else{
              //抛出异常
              thow new Error('vue need a value')
          }
      }

})

```

当存在多个路由配置文件时可通过遍历所有文件的方式引入路由

```js
const routerlist = []

function importall(r){
    r.keys().forEach(val=>{
        routerlist.push(r(key).default)
    })
}
//获取route文件夹下的所有routes.js文件中导出的对象
importall(require.context('../route',true,/\.routes\.js/));

const routes = [
     {
         path:'/',
         component:home
     },
     ...routerlist

]

```
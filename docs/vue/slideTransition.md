### 移动端页面切换动画
1、需要将根路由的地址跳转到动画配置的页面_____pageTransition.vue
```vue
<template>
  <div>
    <transition :name="transitionName">
      <router-view class="child-view" v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-right"
    }
  },
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = "slide-right"
    } else {
      this.transitionName = "slide-left"
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}
</style>

```
2、路由配置
```js
{
    path: "/",
    component: PageTransition,
    redirect: "/oilGasList",
    children: [
      {
        path: "/oilGasList",
        name: "oilGasList",
        component: oilGasList,
        meta: {
          title: "加油打气",
          keepAlive: true
        }
      },
}
```

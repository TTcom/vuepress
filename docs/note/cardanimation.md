### 一个卡片由下向上翻转展示的动画

```
这个动画是在qq空间里面看到的，下面实现该动画效果
```

```vue
<template>
  <div class="demo">
    <div class="onbox">
      <transition name="animation">
        <div class="vbox" v-if="isCllose"></div>
      </transition>
    </div>
    <el-button type="primary" @click="isCllose = !isCllose">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      isCllose: false
    }
  }
}
</script>
<style lang="scss" scoped>
.onbox {
  width: 300px;
  height: 500px;
  margin: auto;
  perspective: 500px;
  overflow: hidden;
}
.vbox {
  width: 300px;
  height: 200px;
  background-color: red;
}
.animation-enter {
  //过渡的开始状态
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.animation-enter-to {
  //过渡的结束状态
  opacity: 1;
}

.animation-enter-active {
  //过渡生效时的状态
  transition: all 0.5s;
  position: absolute;
  top: 0;
  width: 300px;
}

.animation-leave {
  opacity: 1;
}

.animation-leave-to {
  opacity: 0;
  margin-top: 200px;
  transform: scale(0.4) translateY(100%) rotateX(45deg);
}

.animation-leave-active {
  transition: all 0.5s;
}

.demo {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

```
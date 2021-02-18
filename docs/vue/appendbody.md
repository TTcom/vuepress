### vue中将弹出框插入body中并且不受父级元素的影响

```vue
<template>
  <div class="select-model">
    <!-- 匹配列表 使用visibility才能获取隐藏元素宽高 -->
    <div class="select-option-wrap" @click="ischoice = !ischoice">
      <ul class="select-drop-list" v-for="(item index) in 6" :key="index" v-show="ischoice">
        <li class="each-item">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ischoice: true,
    };
  },
  computed: {
    matchDom() {
      // 匹配框，需要相对于body
      return this.$el.querySelector(".select-drop-list");
    },
    matchParent() {
      // 匹配框父级
      return this.$el.querySelector(".select-option-wrap");
    },
  },
  mounted() {
    // 组件监听页面resize只能用addEventListener，否则不会生效
    window.addEventListener("resize", this.checkTransfer, false);
    // 监听scroll事件的事件传递必须使用捕获阶段，让外部元素事件先触发
    document.addEventListener("scroll", this.checkTransfer, true);
  },
  watch: {
    ischoice(newval) {
      const body = document.querySelector("body");
      if (newval) {
        this.checkTransfer();
        // 将匹配DOM添加到body中
        if (body.append) {
          // 在IE11中 document.appendChild会报错: javascript runtime error:HierarchyRequestError
          body.append(this.matchDom);
        } else {
          body.appendChild(this.matchDom);
        }
      } else {
        body.removeChild(this.matchDom);
      }
    },
    methods: {
      checkTransfer() {
        if (this.ischoice) {
          // 聚焦时，需要计算当前匹配DOM的位置
          let bodyHeight = document.documentElement.clientHeight; // body 可视区域高度
          let matchHeight = this.matchDom.clientHeight; // 匹配DOM的高度
          let rect = this.matchParent.getBoundingClientRect(); // 取出匹配父级DOM的矩形对象
          // getBoundingClientRect.bottom为元素下边与页面上边的距离，所以元素下边与页面下边距离 = 页面高度 - getBoundingClientRect.bottom
          let bottom = bodyHeight - rect.bottom;
          this.matchDom.style.visibility = "visible";
          this.matchDom.style.left = rect.left + "px"; // 匹配DOM的left与父级一致
          if (bottom >= matchHeight) {
            // 父级距离页面下边的高度大于等于匹配DOM的高度，则往下展示
            this.matchDom.style.bottom = "auto";
            this.matchDom.style.top = rect.top + rect.height + "px"; // 匹配DOM的top = 父级矩形对象top + 父级的高度
          } else {
            // 父级距离页面下边的高度小玉匹配DOM的高度，则往上展示
            this.matchDom.style.top = "auto";
            this.matchDom.style.bottom = bottom + rect.height + "px"; // 匹配DOM的bottom = 父级矩形对象bottom + 父级的高度
          }
        }
      },
    },
    beforeDestroy() {
      // 当DOM元素与事件拥有不同的生命周期时，倘若不remove掉eventListener就有可能导致内存泄漏
      window.removeEventListener("resize", this.checkTransfer, false);
      document.removeEventListener("scroll", this.checkTransfer, true);
    },
  },
};
</script>


```

### vue_transition

```
如何写一个简单的transition动画
```
```
最简单的当然是官网给的
```
```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```
```
有点不太清晰哈
```
```
来个清晰点的，又简单的
```
```css
.activity-dialog-enter {
    //过渡的进入开始的状态
    opacity: 0;
    position: relative;
    top: -10px;
  }
  .activity-dialog-enter-active {
    //过渡进入生效时的状态
    transition: all 0.3s;
  }
  .activity-dialog-enter-to {
    //过渡的进入结束状态
     opacity: 1;
     position: relative;
     top: 0;
  }
  .activity-dialog-leave {  //过渡的离开开始状态
    opacity: 1;
    position: relative;
    top: 0;
  }
  .activity-dialog-leave-active {  //过渡的离开生效时的状态
    transition: all 0.3s;
    
  }
  .activity-dialog-leave-to {   //过渡的离开结束状态
    opacity: 0;
    position: relative;
    top: -10px;
  }
```
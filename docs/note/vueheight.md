### 使用 Vue Transition 实现高度渐变动画
::: tip <span style="color:#999;font-weight: initial;"><a href="https://blogs.vicsdf.com/article/638#">原文链接</a></span> 🎉 💯
&ensp;                     				  
:::
CSS Transition 中的高度从 0 到 auto 以及从 auto 到 0 是个艰难的任务（相比于其它属性的 transition 而言），原因也很简单：就是浏览器不支持此类 CSS 动画，无论在何种情况下，它都不会成功。
但是高度渐变是个很常用的动画效果，如果绕过纯 CSS height 属性，有如下方式来实现：
使用 max-height 属性，为元素设置一个不可能达到的最大高度，然后将 transition 转换为 max-height 从 0 到某个固定的值； 使用 transform: scaleY 实现； 使用 JavaScript 动画。
上面的解决方案都从某种程度上解决了问题，但是，各有各的限制于缺点：
使用 max-height 会造成动画效果与预期有些许出入（加速与延迟），实际体验是，它与实际 height 区别越大，这种感觉就会越明显，原因也很容易想到，因为 transition 的起点与终点均不在实际的起点与终点上； 使用 scaleY 有两个问题：一是动效与高度渐变不一样，元素的内容看上去是被压缩了（而不是被收起或展开），这个倒可以忍耐。可恶的是第二点，它虽然看起来是渐变了，然而高度却并没有被渐变！意思是，在它下面的元素会在动画结束后"跳"到另一个位置而不是平滑地渐变到这个位置； 使用 JavaScript 动画其实已经可以完美地实现高度渐变了，然而，问题是我们需要引入额外的 lib 来做成这件事，我可没心情纯 js 手写动画。
所以，我的目标是：
使用 css transition 完成动画； 动画效果必须完美； 与 vue transition 组件集成。
这实际上是一个很艰难的任务。经过了大量的失败尝试，最终还是 google 救了我。。下面先直接上解决方案。
css 部分非常简单，因为它不可以完成从 0 到 auto 的渐变，却可以完成从 0 到固定值的渐变，因此，思路是渐变仍由 css 完成，但会通过钩子给元素做些魔法操作：
```js
.collapse {
  transition: height .3s ease-in-out;
  overflow: hidden;
}
```
下面是重点 vue transition 部分：
```js
on: {
  enter (el) {
    el.style.height = 'auto'
    // noinspection JSSuspiciousNameCombination
    let endWidth = window.getComputedStyle(el).height
    el.style.height = '0px'
    el.offsetHeight // force repaint
    // noinspection JSSuspiciousNameCombination
    el.style.height = endWidth
  },
  afterEnter (el) {
    el.style.height = null
  },
  leave (el) {
    el.style.height = window.getComputedStyle(el).height
    el.offsetHeight // force repaint
    el.style.height = '0px'
  },
  afterLeave (el) {
    el.style.height = null
  }
}
```
这些钩子大概是这样的：
enter 会在元素从无到有的时候触发，即我们期望的高度从 0 到 auto 的时候； afterEnter 会在 enter 结束后触发； leave 会在元素从有到无，即高度从 auto 到 0 的时候触发； afterLeave 同理
这些钩子内的代码真的很魔性，大概是这样的：
enter
这个方法被调用的时候，元素实际上已经被插入到 dom 中（ v-if ）或者 display 属性不为 none 了（ v-show ），因此，是可以获取到它的实际高度的。
先将其高度设置为 auto，然后通过 getComputedStyle 方法来获取其实际高度； 将其高度设置为 0； 将其高度设置为第一步取得的实际高度。
但是！这么做有个致命问题，我是在同一个方法内同步完成这些步骤的，因此，第二步和第三步执行的结果看起来就像跳过了第二步而只执行了第三步一样，这样就没有高度从 0 到某个值的过程，自然也就没有渐变动画了。
重点！
这里说的魔法，实际上就是那一句看似啥都没做的 el.offsetHeight，它使浏览器强制进入了一个 repaint 流程。至于它为什么能实现这个功能，真的不太清楚，google 一波也只是知其然不知其所以然，我们甚至不用给它赋值，只要引用一次就行了。可以看做一个非常神奇的技巧。实测在 IE 10 以上 / Chrome / Firefox / Safari 上均能工作。
因此，enter 的流程变为：
先将其高度设置为 auto，然后通过 getComputedStyle 方法来获取其实际高度； 将其高度设置为 0； 强制浏览器重绘； 将其高度设置为第一步取得的实际高度。
这样动画就成功执行了！
解了 enter 过程，剩下的 afterEnter / leave / afterLeave 钩子，里面的内容就很容易理解了。
回过头来看一下实现原理其实很简单粗暴，因此，除了在 vue 上面可以这么玩，其实其他支持 css transition 的框架肯定也是可以的（如 angular 中有 ngAnimate 可以实现），最终达到的动画效果十分完美，并且没有借助主框架以外的任何额外 js 库。
### html实例
```html

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			*{
				margin: 0;
				padding: 0;
				
			}
			[v-cloak]{
				display: none;
			}
			html,body,.list{
				width: 100%;height: 100%;
			}
			#app{
				padding: 0 20px;
			}
			ul li{
				list-style: none;
				background-color: #00BFFF;
				border-top: 1px solid black;
				cursor: pointer;
				
			}
			li:nth-child(1){
				border: none;
			}
			.monday{
					overflow: hidden;
					transition: height .3s ease-in-out;
				
			}
		</style>
	</head>
	<body>
		<div id="app" v-cloak>
			<div class="list">
				<ul>
					<li>
					  <div @click="ismonday=!ismonday" style="height: 35px;line-height: 35px;background-color: peru;">星期1</div>
					<transition @enter="enter" @afterEnter="afterEnter" @leave="leave" @afterLeave="afterLeave">	  
					  <div class="monday" v-show="ismonday">
						  九·一八事变，又称奉天事变、柳条湖事件。是1931年9月18日夜日本在中国东北蓄意制造并发动的一场侵华战争，是日本帝国主义侵华的开端。
						  1931年9月18日夜，在日本关东军安排下，铁道“守备队”炸毁沈阳柳条湖附近的南满铁路路轨（沙俄修建，后被日本所占），并栽赃嫁祸于中国军队。日军以此为借口，炮轰沈阳北大营，是为“九一八事变”。次日，日军侵占沈阳，又陆续侵占了东北三省。1932年2月，东北全境沦陷。此后，日本在中国东北建立了伪满洲国傀儡政权，开始了对东北人民长达14年之久的奴役和殖民统治。
						  “九·一八事变”是日本帝国主义长期以来推行对华侵略扩张政策的必然的结果，也是企图把中国变为其独占的殖民地而采取的重要步骤。它同时标志着世界反法西斯战争的开始，揭开了第二次世界大战东方战场的序幕。
					  </div>
					</transition>  
					</li>
					<li style="height: 35px;line-height: 35px;background-color: peru;">星期2</li>
					<li style="height: 35px;line-height: 35px;background-color: peru;">星期3</li>
					<li style="height: 35px;line-height: 35px;background-color: peru;">星期4</li>
					<li style="height: 35px;line-height: 35px;background-color: peru;">星期5</li>
				</ul>
			</div>
			
		</div>
	</body>
</html>
<script src="vue.js"></script>
<script>
	
	new Vue({
		el:"#app",
		data(){
			return{
			    list:"一个list",
				ismonday:false
			}
		},
		methods:{
			enter(el) {
				el.style.height = 'auto';
				let endWidth = window.getComputedStyle(el).height;
				el.style.height = '0px';
				el.offsetHeight // force repaint
				el.style.height = endWidth;
			},
			afterEnter(el) {
				el.style.height = null;
			},
			leave(el) {
				el.style.height = window.getComputedStyle(el).height;
				el.offsetHeight // force repaint
				el.style.height = '0px';
			},
			afterLeave(el) {
				el.style.height = null;
			},
		}
	})
	
	
	
</script>




```
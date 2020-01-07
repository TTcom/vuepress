### vue函数式组件

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
				transition: height .3s ease-in-out;
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
			
					  <my-transition >
						  <div class="monday" v-show="ismonday">
							  九·一八事变，又称奉天事变、柳条湖事件。是1931年9月18日夜日本在中国东北蓄意制造并发动的一场侵华战争，是日本帝国主义侵华的开端。
							  1931年9月18日夜，在日本关东军安排下，铁道“守备队”炸毁沈阳柳条湖附近的南满铁路路轨（沙俄修建，后被日本所占），并栽赃嫁祸于中国军队。日军以此为借口，炮轰沈阳北大营，是为“九一八事变”。次日，日军侵占沈阳，又陆续侵占了东北三省。1932年2月，东北全境沦陷。此后，日本在中国东北建立了伪满洲国傀儡政权，开始了对东北人民长达14年之久的奴役和殖民统治。
							  “九·一八事变”是日本帝国主义长期以来推行对华侵略扩张政策的必然的结果，也是企图把中国变为其独占的殖民地而采取的重要步骤。它同时标志着世界反法西斯战争的开始，揭开了第二次世界大战东方战场的序幕。
						   </div>
						</my-transition>
						
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
	Vue.component('my-transition', {
		        functional:true,
		        render:function (h, ctx) {
					console.log(ctx);
		            var data = {
		                on:{
		                    enter:function (el, done) {
		                        el.style.height = 'auto';
		                        let endWidth = window.getComputedStyle(el).height;
		                        el.style.height = '0px';
		                        el.offsetHeight // force repaint
		                        el.style.height = endWidth;
		                    },
							afterEnter:function(el){
								el.style.height = null;
							},
							
		                    leave:function (el, done) {
		                        el.style.height = window.getComputedStyle(el).height;
		                        el.offsetHeight // force repaint
		                        el.style.height = '0px';
		                    },
							afterLeave:function(el){
								el.style.height = null;
							},
		                }
		            }
		            return h('transition', data, ctx.children)
		        }
		    })
	 var app = new Vue({
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
	});

	
</script>



```
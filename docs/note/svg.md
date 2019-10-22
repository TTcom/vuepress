## svg介绍
- SVG 是一种开放标准的矢量图形语言，即表示可缩放矢量图形（Scalable Vector Graphics）格式，是由万维网联盟（W3C）开发并进行维护的。
- 优点：由于 SVG 图像是矢量图像，可以无限缩小放大，所以 SVG 可以在任何分辨率的设备上高清显示，不需要再像以前一样输出各种 @2x 倍图来适配不同分辨率的屏幕。
- SVG 有非常成熟的设计工具支持导出 SVG 的图形格式，比如，AI 或者是 Sketch 等设计软件都支持直接导出 SVG 的图形格式，非常方便。
- SVG 的 viewBox 是一个非常强大的属性，它可以精确的控制和定义SVG的可视空间。它实际上可以看做是一个定义了可视范围的坐标系统。
- 
## 画一条线
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			
			.svg1 line {
				/* 排列方式按照实线为10间隔为10的方式排列下去 */
			    stroke-dasharray:300;  
				/* 定义 dash 线条开始的位置  */
			    stroke-dashoffset:300;
				animation: stroke 0.6s linear forwards;     
			}
			@keyframes stroke {
			  100% {
			    stroke-dashoffset: 0;
			  }
			}
		</style>
	</head>
	<body>
		
		
		<svg x="0px" y="0px" width="300px" height="100px" viewBox="0 0 300 100" class="svg1">
		  <line x1="0" y1="0" x2="300" y2="0" stroke="#000" stroke-width="1" ></line>
		</svg>
		
		
	</body>
</html>

```
## 画一个圆
```html
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title></title>
				<style>
					 .checkmark {     /* 画布位置 */
					  width: 56px;
					  height: 56px;
					  display: block;
					  margin: 10% auto;
					}
					.checkmark__circle {
					  stroke-dasharray: 180;
					  stroke-dashoffset:180;
					  /* 用来设置 dasharray 定义 dash 线条开始的位置 */
					  stroke-width: 2;
					  stroke: #7ac142;
					  fill: none;
					  /* 不填充 */
					  animation: stroke 0.6s linear forwards;     
					  /* forwards是停在动画最后的的那个画面。 */
					}
					@keyframes stroke {
					  100% {
					    stroke-dashoffset: 0;
					  }
					}
					
				</style>
			</head>
			<body>
				
				
				<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
				  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
				  <!-- <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/> -->
				</svg>
				
				
			</body>
		</html>
	
```
## 画一个成功的动画
- 我只需要在 AI 等矢量设计软件中绘制该图形，然后导出 SVG 代码就可以了
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		    .checkmark__circle {
		      stroke-dasharray: 166;
		      stroke-dashoffset: 166;
		      stroke-width: 2;
		      stroke: #7ac142;
		      fill: none;
		      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
		    }
		    
		    .checkmark {
		      width: 56px;
		      height: 56px;
		      border-radius: 50%;
		      display: block;
		      stroke-width: 2;
		      stroke: #fff;
		      margin: 10% auto;
		      box-shadow: inset 0px 0px 0px #7ac142;
		      animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
		    }
		    
		    .checkmark__check {
		      transform-origin: 50% 50%;
		      stroke-dasharray: 48;
		      stroke-dashoffset: 48;
		      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
		    }
		    
		    @keyframes stroke {
		      100% {
		        stroke-dashoffset: 0;
		      }
		    }
		    @keyframes scale {
		      0%, 100% {
		        transform: none;
		      }
		      50% {
		        transform: scale3d(1.1, 1.1, 1);
		      }
		    }
		    @keyframes fill {
		      100% {
		        box-shadow: inset 0px 0px 0px 30px #7ac142;
		      }
		    }
	
			
		</style>
	</head>
	<body>
		
		<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
		  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
		  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
		</svg>
		
	</body>
</html>
```




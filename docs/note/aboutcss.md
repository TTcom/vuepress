### 动态更换主题方案
- https://juejin.cn/post/7024025899813044232
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        :root {
        --main-bg-color: blue;  
        --el-color-primary: red;  
        }
 
        #div1 {
        background-color: var(--main-bg-color);
        padding: 5px;  
        }
    </style>
</head>
<body>

    <div id="div1">
        paddingdiv1
    </div>
   <div>
       <button type="button" onclick="turncolor()">change</button>
   </div>
</body>
</html>
<script>
  
 function turncolor(){
/* element官网指南 */ 

// document.documentElement is global
const el = document.documentElement

// const el = document.getElementById('xxx')

// get css var

// console.log(getComputedStyle(el))
console.log(getComputedStyle(el).getPropertyValue(`--main-bg-color`)) //获取样式
// set css var
// el.style['--el-color-primary'] = 'red'

// // set css var 如果 style 中没有这个变量需要这样设置
el.style.setProperty('--main-bg-color', 'red')  //设置样式

 }


</script>

```










### 简述rem和em的区别

::: tip rem 
rem:rem中的r意思是root（根源），就是相对于html的font-size的大小，元素的大小乘以根（html的font-size的大小）。         				  
:::
::: tip em 
rem:em子元素字体大小的em是相对于父元素字体大小(子元素的fontSize=数值乘以父元素的大小),元素的width/height/padding/margin用em的话是相对于该元素的font-size（大小等于数值乘以本身的font-size的大小）。         				  
:::
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			#father{
				font-size: 15px;
				width: 10em;
				border: 1px solid #00BFFF;
			}
			 #father #son{
				font-size: 12px;
				width: 2em;
				border: 1px solid #00BFFF;
			} 
		</style>
	</head>
	<body>
		
		<div id="father">
			 father
			<div id="son">
                   son     				
			</div>
		</div>
		
	</body>
</html>


```
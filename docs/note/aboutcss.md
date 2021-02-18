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
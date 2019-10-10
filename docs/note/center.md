### css垂直水平居中
```html
方式一：不需要确定宽高
 <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			.box{
				
				position: absolute;
				background-color: #008000;
				left: 50%;
				top: 50%;
				margin-left: -100px;
				margin-top: -100px;
			}
		</style>
	</head>
	<body>
		<div class="box">
			撒了扩付或或或或或或或或或或噶所所绿扩过哈所扩绿或
		</div>
	</body>
</html> 
方式二：不需要确定宽高
 <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			*{
				margin: 0;padding: 0;
			}
			.box{
				
				position: absolute;
				background-color: #008000;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
			}
		</style>
	</head>
	<body>
		<div class="box">
			撒了扩付或或或或或或或或或或噶所所绿扩过哈所扩绿或
		</div>
	</body>
</html> 
方式三：不需要确定宽高

使用flex布局

方式四：需要确定宽高

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			*{
				margin: 0;padding: 0;
			}
			.box{
				
				position: absolute;
				background-color: #008000;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
			}
		</style>
	</head>
	<body>
		<div class="box">
			撒了扩付或或或或或或或或或或噶所所绿扩过哈所扩绿或
		</div>
	</body>
</html>


```
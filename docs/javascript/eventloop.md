### Event Loop

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container"></div>
    
</body>
</html>
<script>
 

//主线程 - 执行栈 - 调用栈 - 微任务 - 宏任务 - 页面渲染

var index = 0;
var startDate = Date.now()
function load(){

    if(index<100000){

        setTimeout(()=>{
            for(let i = 0;i<50;i++){
            index++;
            let li = document.createElement('li');
            li.innerHTML = index;
            container.appendChild(li);
            }
            load()
        },0)
    }else{
        console.log(Date.now()-startDate)
    }
    
    
}

load()
 
</script>

```
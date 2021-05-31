### 父页面传递以及接受信息

```js
 <div>
        <button type="button" onclick="sendmsgtoson()">sendmessage</button>
    </div>
    <iframe src="25.html" id="frame"></iframe>
  //父页面接收信息 js 监听事件 事件名称'message'
window.addEventListener('message', function(e) {
     console.log(e)   //这里打印一下看里面的内容
     var data = e.data;       
     if(data && data.type && data.type == 'onload') { //判断一下 
          console.log(data); //打印出来看一下
          // do something
     }
},false)
//向子页面传递信息
function sendmsgtoson(){
  var frame=document.getElementById("frame");
  frame.contentWindow.postMessage({
    type: "set",
    data:{
        name:"jack"
    }
  }, "*");
}
```
### 子页面传递以及接受信息

```js
 <div>
        <button type="button" onclick="sendmsgtofather()">sendmessage</button>
    </div>
 //子页面向父级页面传递信息
//传递的参数随意 看个人理解
 function sendmsgtofather(){
    window.parent.postMessage({  //与父级页面通讯方法
    type: "onload",              //父级接收的信息 
    data:"asd"        //如果传递的信息为object（数组或者json格式）需要转换成字符串
     }, '*');
}    
//子页面接收信息 与父页面接收信息相同
window.addEventListener('message', function(e) {
     console.log(e)   //这里打印一下看里面的内容
     var data = e.data;       
     if(data && data.type && data.type == 'set') { //判断一下 
         console.log(data)
     }
},false)


```

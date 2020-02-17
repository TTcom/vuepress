## 冒泡排序
```js
var arr = [3,44,38,2,27]; //length: 5
	
	
	for(var j=0;j<arr.length;j++){           //冒泡排序
		
		for(var i=0; i<arr.length-1-j; i++){      //每次让最大的数字在最后面
		
			if(arr[i]>arr[i+1]){
				var temp = arr[i+1];
				arr[i+1] = arr[i];
				arr[i]=temp;
			}
		}
	}
	console.log(arr)
```


## 选择排序	
```js
 var arr = [3,44,38,2,27]; //length: 5
	
    var len = arr.length;

    var minIndex, temp;

    for (var i = 0; i < len - 1; i++) {

        minIndex = i;

        for (var j = i + 1; j < len; j++) {

            if (arr[j] < arr[minIndex]) {    // 寻找最小的数

                minIndex = j;                // 将最小数的索引保存

            }

        }

        temp = arr[i];

        arr[i] = arr[minIndex];

        arr[minIndex] = temp;

    }

	console.log(arr)
	
```
## 获取数组
```js
     let arr = ['2','5','4','rew','yth'];

     let num = Math.floor(Math.random() * (arr.length));

   console.log(arr[num]);

      //Math.floor()向下取整
      //Math.ceil()向上取整    
      //Math.random()获取[0,1)之间的一个随机数，但不包含1
     // js生成四个随机字母
      function getRanNum(){
       var result = [];
        for(var i=0;i<4;i++){
           var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
            //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
            result.push(String.fromCharCode(65+ranNum));
        }
     return  result.join('');
    }

```

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

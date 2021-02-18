### 时间复杂度 定性描述该算法的运行时间
### 空间复杂度 指代码运行过程中临时占用的存储空间大小

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
## 快速排序
```js
function quicksort(arr){
	if(arr.length <= 1 ){
		return arr
	}  
	let middle =[]
	let left = []
	let right = []
    for(let i = 0;i<arr.length;i++){
	   if(arr[i]===arr[0]) middle.push(arr[i])
	   if(arr[i]<arr[0]) left.push(arr[i])
	   if(arr[i]>arr[0]) right.push(arr[i])
	}
    return quicksort(left).concat(middle).concat(quicksort(right))

}
```
## 数组转链表
```js
//数组转链表
function array2list(arr,start){
 if(start===arr.length){
	 return null
 }
  let node = {
	  next:null,
	  value:arr[start]
  }
  let rest = array2list(arr,start+1)
  node.next = rest
  
  return node 

}

```
## 链表转数组
```js
//链表转数组
function turnarr(head){

   let arr = []
   let cur = head 
  while(cur){
	arr.push(cur.value)
    cur = cur.next
  }
  return arr

}

```
## 链表反转普通操作
```js
//链表反转普通操作
function reveserlist(head){
 let [pre,cur] = [null,head]

	while(cur){
		let temp = cur.next
		cur.next = pre  //反转
		pre = cur
		cur = temp
	}
    return pre

}
```
## 链表反转递归操作
```js
//链表反转递归操作
function reveserlist(head){
	  const receve = (pre,cur)=>{
		if(!cur) return pre
		let next = cur.next
		    cur.next = pre  
		    return receve(cur,next)
	  }
	   return receve(null,head)
}
```
## 获取数组中两数之和为目标值的下标
```js 
function getsubindex(arr,target){
	let i = 0
	let temp = []
	while(i<arr.length){
		if(temp[target - arr[i]] !=undefined){
			return [temp[target - arr[i]],i]
		}
		temp[arr[i]] = i
		i++
	}
}
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
## 全排列
```js
function(nums) {
    let len = nums.length;
    let res = [];
    
    function back(path){
        if(path.length === len){
            res.push(path);
            return;
        }
        for(let i = 0;i < len;i++){
            if(path.indexOf(nums[i]) === -1){	//这里的判断很精髓
                path.push(nums[i]);
                back(path.slice()); 
               // console.log(path)
                path.pop(); //移除最后一个数组元素  此处等于新开了一个新的开头的数组：比如【1,2,3】，他会产生一个【2】开头的数组，【3】开头的数组
            }
        }
    }
    back([]);
    return res;
}
```

## 最长公共前缀
```js
function fluter(arr){
  
    if(!arr.length){
        return ''
    }
    return arr.reduce((pre,next)=>{
        let i = 0;

        while(pre[i] && next[i] && pre[i] === next[i]) i++

        return pre.slice(0,i)
    })

}



```
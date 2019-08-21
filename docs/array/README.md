### 获取数组中出现次数最多的字符
``` js
var arr=['a','a','b','v','c','v','b','b','b','n','c','v'];
	var res={};
	
	arr.forEach((value,i)=>{
		
		if(!res[value]){
			res[value]=1
		}else{
			res[value]++;
		}
	})
	
	var keys = Object.keys(res);
	
	var maxnum=0,maxvalue;
	
	console.log(keys);
	console.log(res);
	keys.forEach((value,i)=>{
		
		if(res[value]>maxnum){
			maxnum=res[value];
			maxvalue=value;
		}
	})
	
	console.log("出现次数最多的字符是"+maxvalue+"出现的次数为"+maxnum)
```
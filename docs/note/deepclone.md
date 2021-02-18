### 深拷贝与浅拷贝
- 深拷贝:  拷贝前的对象和拷贝后的对象不会互相影响,拷贝前后没有关系,拷贝多层 
- 浅拷贝:  拷贝前的对象和拷贝后的对象会互相影响,拷贝前后有关系,只拷贝一层

```js
// let obj = {"name":"xiaoming","god":{"age":58}};
	// 
	// let vbj = {...obj};
	// 
	// obj.name = "english"
	// obj.god.age = 99;
	// //console.table(obj,vbj);
	// 
	// let a = [3,1,2];
	// 
	// let arr = [a];
	// 
	// let newArr = arr.slice();
	// 
	// newArr[0][0] = 5;
	// console.log(arr[0][0]);
	
	
	//JSON.stringify 深拷贝不完整 不能实现复杂的拷贝
	// let obj = {"name":"xiaoming","god":{"age":58}};
	
	// let vbj = JSON.parse(JSON.stringify(obj)) 
	
	// obj.name = "english"
	// obj.god.age = 99;
	// console.log(obj,vbj);
	
	//实现一个深拷贝 实现一个递归拷贝
	function deepClone(obj,hash = new WeakMap()){    //WeakMap弱引用,key必须是个对象

		if(obj == null)  return obj; //  如果是null或者undefined我就不进行拷贝操作
		if(obj instanceof Date) return new Date(obj);    //如果是日期
		if(obj instanceof RegExp) return new RegExp(obj);  //如果是正则的话
		//可能是对象 或者 普通的值 如果是函数的话 是不需要深拷贝的
		if(typeof obj !== 'object') return obj;
		if(hash.get(obj)) return hash.get(obj);
		//是对象的话就要进行深拷贝
		// [] {}
		let cloneObj = new obj.constructor;   //构建一个数组或对象
		hash.set(obj,cloneObj);
		for(let key in obj){
			 if(obj.hasOwnProperty(key)){
				 //实现一个递归拷贝
				 cloneObj[key] = deepClone(obj[key],hash);
			 }
		}
		return cloneObj;

	}
	
	let obj = {name:12,address:{x:200}};
	obj.o = obj
	let p = deepClone(obj);
	console.log(p);

```

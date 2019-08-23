### 遍历树查找对应的key
```js
//首先我们需要一个树
const treeData = [{
	  title: '0-0',
	  key: '0-0',
	  children: [{
	    title: '0-0-0',
	    key: '0-0-0',
	    children: [
	      { title: '0-0-0-0', key: '0-0-0-0' },
	      { title: '0-0-0-1', key: '0-0-0-1' },
	      { title: '0-0-0-2', key: '0-0-0-2' },
	    ],
	  }, {
	    title: '0-0-1',
	    key: '0-0-1',
	    children: [
	      { title: '0-0-1-0', key: '0-0-1-0' },
	      { title: '0-0-1-1', key: '0-0-1-1' },
	      { title: '0-0-1-2', key: '0-0-1-2' },
	    ],
	  }, {
	    title: '0-0-2',
	    key: '0-0-2',
	  }],
	}, {
	  title: '0-1',
	  key: '0-1',
	  children: [
	    { title: '0-1-0-0', key: '0-1-0-0' },
	    { title: '0-1-0-1', key: '0-1-0-1' },
	    { title: '0-1-0-2', key: '0-1-0-2' },
	  ],
	}, {
	  title: '0-2',
	  key: '0-2',
	}];

//第一种方式利用whlie循环找到我们想要找到的对象

const style1 = (key)=>{
	
	let current;
	let index = 0;
	var stack = [...treeData];
	
	while(current = stack[index++]){
		if(current.key != key){
			if(current.children && current.children.length){
				stack = stack.concat(current.children);
			}
		}else{
			break;
		}
		
	}
	
	return current;
}

console.log(style1('0-0-1-1'))  //{title: "0-0-1-1", key: "0-0-1-1"}

//第二种方式利用forEach循环逐个查找每一个都会遍历

let findvalue;
const style2 = (key,arr) => {
	
	arr.forEach(value=>{
		if(value.key == key){
			findvalue = value;
		}
		if(value.children && value.children.length){
			style2(key,value.children);
		}
	})
}
style2('0-0-1-1',treeData)
console.log(findvalue)  //{title: "0-0-1-1", key: "0-0-1-1"}

```
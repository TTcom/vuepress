### javascript中的this、call、apply、bind的区别
简书原文链接[](https://www.jianshu.com/p/bc541afad6ee)
```js
//call apply bind
	
	//call（接收的是参数）和 apply（接收的是数组） 的特点可以改变我们当前函数的this指向,还会让当前函数执行
// 	function fn1(){
// 		console.log(this)
// 	}
// 	function fn2(){
// 		console.log(2);
// 	}
	
// //	fn1.call("hello",'123154')
	
// 	fn1.call.call(fn2);
	
	//bind 
	//1) bind方法可以绑定this指向
	//2)bind方法返回一个绑定后的函数
	//3)如果绑定的函数被new了 当前函数的this就是当前的实例
	let obj = {
		name:"jw"
	}
	
	function fn(){
		console.log(this.name)
	}
	
	let bindFn = fn.bind(obj)
	bindFn();
-----------------------------------------------------

//var a = 1
// var obj1 = {
//     a:2,
//     fn:function(){
//         console.log(this)
//     }
// }
// 
// obj1.fn();  //obj1调用的该函数所以指向obj1
// var fn1 = obj1.fn      //此时fn1为function(){console.log(this)}    所以this指向window
// fn1()//1

// 	function Product(name, price) {
// 		this.name = name;
// 		this.price = price;
// 
// 		if (price < 0) {
// 			throw RangeError(
// 				'Cannot create product ' + this.name + ' with a negative price'
// 			);
// 		}
// 	}
// 
// 	function Food(name, price) {
// 		Product.apply(this, [name, price]);
// 		this.category = 'food';
// 	}

	//等同于
	//new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上
// 	function Food(name, price) {
	// 这里的this都指向实例
// 		this.name = name;
// 		this.price = price;
// 		if (price < 0) {
// 			throw RangeError(
// 				'Cannot create product ' + this.name + ' with a negative price'
// 			);
// 		}
// 
// 		this.category = 'food';
// 	}


// var cretefood = new Food("胡萝卜", 1000);
// 
// 
// 
// console.log('cretefood',cretefood);
// 


// var a=10;
// 
// 
// function go(){
// 	
// 	console.log(a);
// 	
// }
// 
// go();
// 


// 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于var _this = this这种丑陋的写法
// 箭头函数不可以当作构造函数，也就是说不可以使用 new 命令, 否则会抛出一个错误
// 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替





var obj = {
    name: 'Dot'
}

function printName() {
    console.log(this.name)
}
//bind 方法不会立即执行，**而是返回一个改变了上下文 this 后的函数**。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。
var dot = printName.bind(obj)
console.log(dot) // function () { … }
dot()  // Dot

```
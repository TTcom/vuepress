### prototype
prototype和__proto__的区别[](https://www.jianshu.com/p/80bcf8b2004e)

```js
//创建函数,原型链
	function foo(){};
	foo.prototype.z=3;
	console.log(foo.prototype); 
	console.log(foo);
	console.log(foo.prototype.__proto__); 
	//prototype表示该函数的原型 属性使您有能力向对象添加属性和方法。每个对象都有一个__proto__标签
	//foo.prototype是一个对象——>有原型__proto__属性 而后__proto__的原型prototype 
	//即__proto__这个对象的prototype为null
	
	// 对象具有属性proto，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
	//使用new来构造函数
	// var obj = new foo();
	// obj.y = 2;
	// obj.x = 1;
	// obj.z=3
	//console.log(obj);
	//obj这个对象 即new的一个创建的一个新对象会有__proto__的属性,__proto__就是obj的隐式原型->会向上查找
	//指向他的构造者(constructor):foo();
	//而后会在foo()上查找prototype是否包含z

	//通过原型链上的继承,我们可以继承原型链上的属性
	
    //创建对象
	var obj = Object.create({x:1});     //相当于在对象的原型上创建了参数x
	//直接在obj的原型上创建属性x
	//obj本身不会有该属性,只是在他的原型上有该属性
	// typeof obj.toString //function
	//所以obj.hasOwnProperty(x)为false
	
	//console.log(obj.hasOwnProperty(x))
	console.log(obj)
	
	var cobj = Object.create(null);     //也可以修改对象的原型或删除对象的原型
	
	// cobj.toString //undefined
	console.log(cobj);
	
	
	//js里的__proto__和prototype到底有什么区别？
	// 1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。
	// 因此，它们都会具有对象共有的特点。即：<strong>对象具有属性proto，可称为隐式原型，
	// 一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。


```
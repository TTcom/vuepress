(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),this._v(" "),s("p",[this._v("简书原文链接"),s("a",{attrs:{href:"https://www.jianshu.com/p/bc541afad6ee",target:"_blank",rel:"noopener noreferrer"}},[s("OutboundLink")],1)]),this._v(" "),this._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"javascript中的this、call、apply、bind的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的this、call、apply、bind的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" javascript中的this、call、apply、bind的区别")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call apply bind")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call（接收的是参数）和 apply（接收的是数组） 的特点可以改变我们当前函数的this指向,还会让当前函数执行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfunction fn1(){")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tconsole.log(this)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfunction fn2(){")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tconsole.log(2);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// //\tfn1.call(\"hello\",'123154')")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfn1.call.call(fn2);")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bind ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1) bind方法可以绑定this指向")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2)bind方法返回一个绑定后的函数")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3)如果绑定的函数被new了 当前函数的this就是当前的实例")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jw"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bindFn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindFn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//var a = 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var obj1 = {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     a:2,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     fn:function(){")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         console.log(this)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj1.fn();  //obj1调用的该函数所以指向obj1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var fn1 = obj1.fn      //此时fn1为function(){console.log(this)}    所以this指向window")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn1()//1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfunction Product(name, price) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.name = name;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.price = price;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tif (price < 0) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tthrow RangeError(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\t\t'Cannot create product ' + this.name + ' with a negative price'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\t);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfunction Food(name, price) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tProduct.apply(this, [name, price]);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.category = 'food';")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等同于")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//new一个函数时，背地里会将创建一个连接到prototype成员的新对象，同时this会被绑定到那个新对象上")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tfunction Food(name, price) {")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的this都指向实例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.name = name;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.price = price;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tif (price < 0) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tthrow RangeError(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\t\t'Cannot create product ' + this.name + ' with a negative price'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\t);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tthis.category = 'food';")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// var cretefood = new Food("胡萝卜", 1000);')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('cretefood',cretefood);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var a=10;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function go(){")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tconsole.log(a);")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// go();")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于var _this = this这种丑陋的写法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数不可以当作构造函数，也就是说不可以使用 new 命令, 否则会抛出一个错误")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替")]),t._v("\n\n\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dot'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bind 方法不会立即执行，**而是返回一个改变了上下文 this 后的函数**。而原函数 printName 中的 this 并没有被改变，依旧指向全局对象 window。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function () { … }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dot")]),t._v("\n\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
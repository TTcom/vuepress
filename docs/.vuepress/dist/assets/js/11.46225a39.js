(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{128:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"prototype"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prototype","aria-hidden":"true"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),n("p",[t._v("prototype和__proto__的区别"),n("a",{attrs:{href:"https://www.jianshu.com/p/80bcf8b2004e",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prototype //原型  每一个函数都有自己的原型prototype")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __proto__ //原型链  每一个对象都有自己的原型链")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建函数,原型链")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tfoo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//prototype表示该函数的原型 属性使您有能力向对象添加属性和方法。每个对象都有一个__proto__标签")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//foo.prototype是一个对象——>有原型__proto__属性 而后__proto__的原型prototype ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//即__proto__这个对象的prototype为null")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象具有属性proto，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用new来构造函数")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var obj = new foo();")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj.y = 2;")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj.x = 1;")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj.z=3")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log(obj);")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//obj这个对象 即new的一个创建的一个新对象会有__proto__的属性,__proto__就是obj的隐式原型->会向上查找")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向他的构造者(constructor):foo();")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//而后会在foo()上查找prototype是否包含z")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过原型链上的继承,我们可以继承原型链上的属性")]),t._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建对象")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相当于在对象的原型上创建了参数x")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接在obj的原型上创建属性x")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//obj本身不会有该属性,只是在他的原型上有该属性")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// typeof obj.toString //function")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所以obj.hasOwnProperty(x)为false")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//console.log(obj.hasOwnProperty(x))")]),t._v("\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也可以修改对象的原型或删除对象的原型")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cobj.toString //undefined")]),t._v("\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//js里的__proto__和prototype到底有什么区别？")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，它们都会具有对象共有的特点。即：<strong>对象具有属性proto，可称为隐式原型，")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。")]),t._v("\n\n\n")])])]),n("h3",{attrs:{id:"父亲、儿子、孙子例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父亲、儿子、孙子例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 父亲、儿子、孙子例子")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首先god visual angle")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fuqin ")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grade "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" abc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd"')]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\tfather"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sport")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我会跑步'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//erzi ")]),t._v("\n\t\t\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("weight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过对象冒充的方式，无法继承通过prototype方式定义的变量和方法;无法继承sport方法")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grade "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makefire")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我能喷火'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    son.prototype.sport = function (){")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    \tconsole.log('我会跑步')")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    }")]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\t  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t son.prototype = new father();    //修改son的原型,将son的原型指向new father();")]),t._v("\n\t  \n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dawa "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'120'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    dawa.sport()             //通过对象冒充的方式，无法继承通过prototype方式定义的变量和方法")]),t._v("\n\t\n\t\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dawa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dawa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grandson")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//sunzi ")]),t._v("\n\t\n\t     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// son.apply(this,[color,weight]);")]),t._v("\n\t     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'weight'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grade "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("makewater")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t     \tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我能喷水'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tgrandson.prototype = new son(); ")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" underson "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("grandson")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'320'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t underson.sport();")]),t._v("\n\t\t\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("underson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);
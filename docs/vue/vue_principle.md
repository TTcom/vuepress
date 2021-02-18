### vue principle

```javascript
1、数据劫持方式一使用Object.defineProperty

function defineData(obj, prop,value){     //obj 要定义属性的对象。prop 要定义或修改的属性的名称或 Symbol 。   value 要定义或修改的属性描述符。   
    Object.defineProperty(obj, prop,{
        configurable:true,
        enumerable:true,
        get(){
            console.log("prop:",prop,'value:',value)
            return value
        },
        set(newVal){
            console.log('newVal',newVal)
             value = newVal
        }
    })
}

function observe(data){
    Object.keys(data).forEach(key=>{
            defineData(data,key,data[key])
    })
}

let arr = [1,'asd',2,5]

observe(arr)

//arr[1]

arr[1] = "dsa"

console.log('arr',arr)


2、使用Proxy

let person = {
    name:"小名"
}

let proxy = new Proxy(person,{
    get:function(target,propKey){
        if (propKey in target) {
            console.log("propKey:",propKey,"target:",target)
         return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
    }
})

console.log('proxy',proxy.name)

```
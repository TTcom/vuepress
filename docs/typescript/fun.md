### 函数
#### 重载：为一个函数提供多种定义

```js
function double(val:number):number;
function double(val:string):string;
function double(val:any):any{
    if(typeof val === "string") {
        return val + val;
    }else if(typeof val === 'number'){
        return val * 2
    }
}

console.log(double(2))
console.log(double('a'))
console.log(double(true))
```

#### 重写：子类重写继承自父类中的方法


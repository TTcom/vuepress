### 时间相关操作

```js
 function timestampToTime (timestamp) {  //将时间戳转为日期   
    const dateObj = new Date(+timestamp) // ps, 必须是数字类型，不能是字符串, +运算符把字符串转化为数字，更兼容
    const year = dateObj.getFullYear() // 获取年，
    const month = dateObj.getMonth() + 1 // 获取月，必须要加1，因为月份是从0开始计算的
    const date = dateObj.getDate() // 获取日，记得区分getDay()方法是获取星期几的。
    const hours = pad(dateObj.getHours())  // 获取时, pad函数用来补0
    const minutes =  pad(dateObj.getMinutes()) // 获取分
    const seconds =  pad(dateObj.getSeconds()) // 获取秒
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
}

function pad(str) {
    return +str >= 10 ? str : '0' + str
}

 console.log(timestampToTime(1597299460734))  //将时间戳转为日期   

 let myDate = new Date() 
 
 console.log(myDate.getTime()) // 获取当前时间时间戳

 console.log(myDate) // 获取标准时间格式

 console.log(Date.parse(myDate)) // 将标准时间格式转为时间戳

 console.log(myDate.toLocaleString()) // 获取当前日期和时间

 console.log(myDate.toLocaleDateString()) //获取当前日期

 console.log(myDate.toLocaleTimeString()) ////获取当前时间

 console.log(myDate.getYear()) /////获取当前年份(2位)

 console.log(myDate.getFullYear()) ////获取完整的年份(4位,1970-????)

 console.log(myDate.getMonth()) ////获取当前月份(0-11,0代表1月)

 console.log(myDate.getDate()) ////获取当前日(1-31)

 console.log(myDate.getDay()) ////获取当前星期X(0-6,0代表星期天)

 console.log(myDate.getTime()) ////获取当前时间(从1970.1.1开始的毫秒数)

 console.log(myDate.getHours()) ////获取当前小时数(0-23)

 console.log(myDate.getMinutes()) ////获取当前分钟数(0-59)

 console.log(myDate.getSeconds()) ////获取当前秒数(0-59)

 console.log(myDate.getMilliseconds()) ////获取当前毫秒数(0-999)
 
```
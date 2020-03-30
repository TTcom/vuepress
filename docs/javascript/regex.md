### regex
#### JS 正则截取字符串
```js
js截取两个字符串之间的内容
varstr = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)fff/)[1];
alert(str);//结果bbbcccdddeee


js截取某个字符串前面的内容：
varstr = "aaabbbcccdddeeefff";
tr = str.match(/(\S*)fff/)[1];
alert(str);//结果aaabbbcccddd


js截取某个字符串后面的内容：
varstr = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)/)[1];
alert(str);//结果bbbcccdddeeefff;


\s 匹配空白字符
\S 匹配非空白字符

[\s\S]匹配空白字符和非空白字符

"23643 rqwwrqwr".match(/\d*(\s\S*)/)[1] //获取数字后的所有字符包含空格
// ( )标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。\s包含空格\S所有字符但不包含空格


检查金额格式是否正确

    console.log(val);
    
    let re2 = /(^[\.]{1}$)/;
    let re1 = /(^[0-9]{1,10}$)|(^[0-9]{1,10}[\.]{1}$)|(^[0-9]{1,10}[\.]{1}[0-9]{1,2}$)/
    let re3 = /(^[0][0-9]{1}$)/;
    if(!val){
        return
    }
    if(re2.test(val)){
        this.salemoneys = '0.';
        return
    }
    if(re3.test(val)){
        this.salemoneys = String(parseInt(val));
        return
    }

    if(!re1.test(val)){
        this.salemoneys = cloneDeep(this.salemoneytemp);
    }else{
        this.salemoneytemp = val
    }

金额千分位转换

function (moneyStr) {
    if(!moneyStr && moneyStr !== 0) moneyStr = '';
    moneyStr += '';
    let x1 = moneyStr.split('.');
    let x2 = x1[0];
    let x3 = x1.length > 1 ? '.' + x1[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while(rgx.test(x2)) {
        x2 = x2.replace(rgx, '$1' + ',' + '$2');
    }
    return (x2 + x3);
};


```
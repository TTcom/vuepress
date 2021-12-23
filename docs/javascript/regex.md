### 通过vscode使用正则为对象的属性名添加双引号
```json
example:
{
    name: "steve"
    age: 99
}
expect：
{
    "name": "steve"
    "age": 99
}

ctrl + h选中需要修改的对象
- 在第一个选择框中输入：([a-z]*):
- 点击.*使用正则按钮
- 在第二个选择框中输入："$1":
- 点击全部替换

```

### regex
```js
- 小数点前三个字符（数字或者特殊字符开头）后面跟一个小数点，后面跟1到6个特殊字符或者数字
- /^[0-9`(){}'[\]]{3}[.]{1}[0-9`(){}'[\]]{1,6}$/.test('(1).222134');
```
```js
- 只限制10位整数 或者 以小数开头最多三个后面跟一位小数后面最多跟6位小数
- /(^[0-9]{1,10}$)|(^[0-9]{1,3}[.]{1}[0-9]{1,6}$)/.test('222132124');
```
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
    
    let re2 = /(^[.]{1}$)/; //以点开头且只能有一个小数点
    // 以0-9开头并且是1到10个数字 或者 以0-9开头并且是1到10个数字后面跟1个小数点 或者 以0-9开头并且是1到10个数字后面跟1个小数点后面跟以0-9开头并且是1到2个数字
    let re1 = /(^[0-9]{1,10}$)|(^[0-9]{1,10}[.]{1}$)|(^[0-9]{1,10}[.]{1}[0-9]{1,2}$)/
    //以0开头且后面只有一位数字
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
金额校验
function limitSmallDecimal(value) {
    if (value === '0.0') {
      return value
    }
    var result = (value.match(/^\d*(\.?\d{0,2})/g)[0]) || ''
    if (result.lastIndexOf('.') === result.length - 1) {
      return result
    }
    // return parseFloat(result) + ''
    return result + ''
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

非正则金额千分位转换
    function goOn(yy) {
        let str = yy ? String(parseFloat(yy).toFixed(2)) : '';
        let upindex = (str.length - 1) - str.indexOf('.')
        str = str.split('').reverse().reduce((pre, next, index) => {
            return index > (upindex + 3) && !(index % 3) ? next + ',' + pre : next + pre
        })
        return str
    }

```
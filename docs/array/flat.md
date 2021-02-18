### ES10flat() 
flat() 方法可以将多维数组展平成一维数组,如果数组中包含空值则会被丢弃
``` js
const arr = ['a','',b', ['c', 'd']];
const flattened = arr.flat();

console.log(flattened);    // => ["a", "b", "c", "d"]

```
ES6可以这么做,但数组中包含空值不会被丢弃
``` js
const arr = ['a','','b', ['c', 'd']];

const flattened =  [].concat(...arr);

console.log(flattened);    // => ["a",'',"b", "c", "d"]

```
flat() 还接受一个可选参数，该参数指定嵌套数组应该被展平的级别数。 如果未提供参数，则将使用默认值1
``` js
const arr = [10, [20, [30]]];

console.log(arr.flat());     // => [10, 20, [30]]
console.log(arr.flat(1));    // => [10, 20, [30]]
console.log(arr.flat(2));    // => [10, 20, 30]

```
flatMap() 方法将map()和flat()组合成一个方法。 它首先使用提供的函数的返回值创建一个新数组，然后连接该数组的所有子数组元素。
``` js
const arr = [4.25, 19.99, 25.5];

console.log(arr.map(value => [Math.round(value)]));    
// => [[4], [20], [26]]

console.log(arr.flatMap(value => [Math.round(value)]));    
// => [4, 20, 26]
```
数组将被展平的深度级别为1.如果要从结果中删除项目，只需返回一个空数组
``` js 
const arr = [[7.1], [8.1], [9.1], [10.1], [11.1]];

arr.flatMap(value => {
  if (value >= 10) {
    return [];
  } else {
    return Math.round(value);
  }
});  

// => [7, 8, 9]
```


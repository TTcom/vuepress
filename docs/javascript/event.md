### js中自定义事件的使用与触发
```js
var event = new Event('build');
// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);
// Dispatch the event.
elem.dispatchEvent(event);
```
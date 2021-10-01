### 从 URL 获取查询参数
可以通过传递 window.location 或原始 URL goole.com?search=easy&page=3 轻松地从 url 检索查询参数
```js
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(URL);
};

getParameters(window.location);
// Result: { search : "easy", page : 3 }
```
或者Object.fromEntries(new URLSearchParams(window.location.search))
### axios全局请求拦截配置

```js
import axios from "axios"

axios.defaults.withCredentials = true  //跨域访问需要发送cookie时一定要加
let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let CancelToken = axios.CancelToken
let removePending = config => {
  console.log(pending)
  if (pending.length > 0) {
    for (let p in pending) {
      if (pending[p].u === config.url + "&" + config.method) {
        // 当当前请求在数组中存在时执行函数体
        pending[p].f() // 执行取消操作
        pending.splice(p, 1) // 把这条记录从数组中移除
      }
    }
  }
}

axios.interceptors.request.use(config => {
  removePending(config) // 在一个ajax发送前执行一下取消操作
  config.cancelToken = new CancelToken(c => {
    // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    pending.push({
      u: config.url + "&" + config.method,
      f: c
    })
  })
  config.headers[config.method]["X-Requested-With"] = "XMLHttpRequest"
  return config
})
axios.interceptors.response.use(
  response => {
    removePending(response.config)
    var serverData = response.data
    if (serverData === null) {
      alert("未知的服务器返回")
      return Promise.reject(response)
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export const doPost = (url, data, target) => {
  if (target && target.loading !== undefined) target.loading = true
  return axios.post(url, data, target).finally(() => {
    if (target && target.loading !== undefined) target.loading = false
  })
}
export const doGet = (url, target) => {
  if (target && target.loading !== undefined) target.loading = true
  return axios.get(url).finally(() => {
    if (target && target.loading !== undefined) target.loading = false
  })
}



```

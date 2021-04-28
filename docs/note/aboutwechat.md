### 微信公众号研发采坑

- 1、首先需要获取签名、appid等数据进行config，config时需要打开debug模式，方便找错调试
- 2、当wxconfig成功后会执行wxready 在wxready后可调用对应的wxapi 
- 3、如果提示地址错误，则意味需要在微信公众平台后台配置安全域名中包含当前的地址
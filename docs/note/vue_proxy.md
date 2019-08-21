### vue_proxy
首先需要在vue.config.js中进行服务器代理配置来解决接口跨域的问题
```js
module.exports = {
	devServer: {
	    port: 8086,
		proxy: {         //服务器代理，解决前后端接口跨域问题
		  '/': {    //这里写需要以什么开头的地址才会去代理    
					//1、这里写以什么开头的地址才会去代理；
					//注意/abc是前端自己自定义的参数名称或者是实际的请求地址的参数名称
					//2、在项目中'只要是'/abc'开头的请求地址才用代理.
					//所以你的接口就要这么写 /abc/xx/xx. 
					//3、如果要代理所有的请求地址就写为"/"
		    target: 'http://172.16.188.16:81',   //服务器地址
		    changeOrigin: true,   //是否更改主机站点
			ws: false,    //是否代理websockets
			// pathRewrite: {  //如果上面的/abc不是实际的请求地址的开头参数那么在这里就要进行冲洗写实际请求时的地址名称
			//   '^/a': '/mark'
			// }
		  }
		}
	  },
		css: {
		    loaderOptions: { // 向 CSS 相关的 loader 传递选项
		      less: {
		        javascriptEnabled: true
		      }
		    }
		  }



}

```
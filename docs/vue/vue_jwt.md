### vue_jwt
vue_jwt实现请求拦截验证
```js
    export  const axiosjwt = (config)=>{           
	
		const instance = axios.create({   //创建了一个axios实例
			baseURL:process.env.NODE_ENV === "development" ? 'http://localhost:3000' : '/',
			timeout:2000
		});
		//请求的时候会执行此方法-拦截器
		instance.interceptors.request.use((config)=>{    //config当前请求的配置
			config.headers.Authorization=localStorage.getItem('token');
			console.log(1);
			return config
		},err=>{
			return Promise.reject(err);
		});
		//设置响应拦截器
		instance.interceptors.response.use(res=>res.data,err=>Promise.reject(err));
		
		return instance(config);         //返回创建的axios实例 
	}

```
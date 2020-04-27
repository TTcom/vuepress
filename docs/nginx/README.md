### Nginx

::: tip Nginx
Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。
:::

::: tip <span style="color:#999;font-weight: initial;"><a href="https://juejin.im/post/5bacbd395188255c8d0fd4b2">猛戳详细原文介绍</a></span> 🎉 💯
&ensp;                     				  
:::

1、nginx转发和跨域配置

```html

server {
        listen       80;     //监听的端口
        server_name  test.com;          //这里可以自定义server_name

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {       //转发的地址                         
            proxy_pass   http://192.168.71.12:8085;  
        }
        location ~ /cgi-bin {         //解决跨域：以/cgi-bin开头的跨域请求全部转发到下面的地址
                 proxy_pass   https://qyapi.weixin.qq.com;
        }

```

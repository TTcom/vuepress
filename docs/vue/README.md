
### vue源码学习
- https://www.jianshu.com/p/302b0bd9abb2
- https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUxNjQ1NjMwNw==&action=getalbum&album_id=1619085427984957440&scene=173&from_msgid=2247484034&from_itemidx=1&count=3&nolastread=1#wechat_redirect
- https://www.bilibili.com/video/BV1Tf4y1L7YH?from=search&seid=4625895786093377797&spm_id_from=333.337.0.0

### vue-cli 

- Vue-Cli 2和3是不能并存的，至少不能同时安装，只能保留一个，在保留3的前提下还想用vue init怎么办？
- 卸载你的Vue-Cli 2：npm uninstall vue-cli -g或yarn global remove vue-cli
- 安装Vue-Cli 3：npm install -g @vue/cli或yarn global add @vue/cli
- 安装一个包：npm install -g @vue/cli-init或yarn global add @vue/cli-init


### Vue打包文件浏览器存在缓存问题
``` js
//修改配置文件

const Timestamp = new Date().getTime();  //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
module.exports = {
    // 输出重构打包后的css文件
    css: {
        extract: {
        //打包后的css带版本号，不改变文件名
        // filename: 'css/[name].css?v=' + Timestamp,
        // chunkFilename : 'css/[name].css?v=' + Timestamp
        //打包后的css带版本号,文件名会改变
        filename: 'css/[name].[' + Timestamp + '].css',
        chunkFilename: 'css/[name].[' + Timestamp + '].css'
        }
    },    
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
            filename: `[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`,
            chunkFilename: `[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`
        }
     },
}

//process.env.VUE_APP_CURRENTMODE获取.env文件中的配置
.env文件配置
NODE_ENV=production
VUE_APP_CURRENTMODE="prd"
//package.json文件配置
"prd": "vue-cli-service build --mode prd",
```

```
1、当对一个表格的数据进行删除的时候，当获取到新的数据时，
此时加一个判断，当请求结束时，如果当前的页数大于总页数，那么将当前页等于总页数并重新请求数据（主要看后端怎么处理如果后端返回的是最后一页的数据并且有数据那么就不用重新请求数据），如果当前页小于等于总页数，那么当前页不做改变。
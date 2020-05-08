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
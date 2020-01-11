### Vue打包文件浏览器存在缓存问题
``` js
//修改配置文件

//let rt = 'http://gaoli.dev.rs.com/'
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//let rt = 'http://10.8.12.234:63261/'
//let rt = 'http://aegean.uat1.rs.com/api-aegean/'
//let rt = 'http://gaoli.mklsoft-test.com/'
const Timestamp = new Date().getTime();  //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer: {
        port: 6001,
        // 设置代理
        proxy: {
            //'/api-aegean/finance': {
            '/api-gaoli': { 
                target: rt, // 域名
                ws: false, // 是否启用websockets
                changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                // pathRewrite: {
                //     '/api-gaoli/finance': '/'
                // }
                // pathRewrite: {
                //     '/api-gaoli': '/api-gaoli'
                // }
            }
        }
    },
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
            filename: `[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`,
            chunkFilename: `[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`
        },
        // 修改打包后css文件名
         plugins: [
           new MiniCssExtractPlugin({
                filename: `css/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.css`,
              //  chunkFilename: `css/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.css`
          })
      ]
     },
}

//process.env.VUE_APP_CURRENTMODE获取.env文件中的配置
.env文件配置
NODE_ENV=production
VUE_APP_CURRENTMODE="prd"
//package.json文件配置
"prd": "vue-cli-service build --mode prd",
```
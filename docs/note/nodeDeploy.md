### nodejs项目部署
::: tip   <span style="color:#999;font-weight: initial;">使用pm2工具进行快速部署</span> 
<a href="https://blog.csdn.net/chengxuyuanyonghu/article/details/74910875" target="view_window">pm2常用的命令</a>
&ensp;                     				  
:::

- 项目部署常用命令
   - rm -rf dist //删除指定的文件夹dist

   - rm -r dist.zip //删除指定的文件dist.zip
   - rz //可以上传文件不能上传文件夹
   - unzip dist.zip //解压dist文件
   - pm2 stop all //停止所有的项目
   - pm2 start app.js //运行app.js
   - vi app.js //修改app.js文件进入修改文件后按i后进行修改，按esc然后再按shift+z+z退出并保存文件



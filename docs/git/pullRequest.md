### 向开源项目提PR

- 先点击右上角的fork项目，然后项目会出现在自己的github上面
- 然后git clone 出现在自己的github上面的这个项目
- 使用git remote -v 命令，可以看到此时只与自己的远程仓库建立了连接
- 与上游建立连接，git remote add upstream https://github.com/Wechat-Group/WxJava 上游的项目地址
- git remote -v 可以看到与上游是否建立连接
- git checkout -b xxx 创建本地分支
- 修改代码并提交
- 提交成功后就可以Create pull request，需要检查内容和分支是否争取

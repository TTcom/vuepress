### 使用git遇到的问题
#### 问题一
在git push的点时候报错<br />
经常遇到该报错：Connection reset by 13.229.188.59 port 22 fatal: Could not read from remote repository.
意为连接远程仓库失败
#### 解决办法
更新代码git pull（如果git pull都失败的话确实是网络问题）  或者 重置ssh——命令：ssh-keygen -t rsa -C "xxx@xxx.com"
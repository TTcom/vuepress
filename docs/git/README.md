### gitlab网页 分支合并 冲突处理
- https://blog.csdn.net/magic_kid_2010/article/details/100977008
### 查看git的所有配置
git config --global -l 
### 设置代理
git config --global --add remote.origin.proxy "[http://127.0.0.1:7890]"

### git设置代理
#### 只为github设置代理
- 1、socks5: 
- git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
- 2、http.https: 
- git config --global http.https://github.com.proxy https://127.0.0.1:7890
#### 取消代理
- git config --global --unset http.https://github.com.proxy
#### 为所有git设置代理
- 1、socks5: 
- git config --global http.proxy 'socks5://127.0.0.1:1080'
- git config --global https.proxy 'socks5://127.0.0.1:1080'
- 2、http.https: 
- git config --global https.proxy http://127.0.0.1:1080
- git config --global https.proxy https://127.0.0.1:1080
#### 取消代理
- git config --global --unset http.proxy

- git config --global --unset https.proxy
### git 版本回退并强制推送
git log //查看commitID
git reset --hard 需要回退的commitID
git push -f //强制推送


### 在gitlab上删除分支后，本地git branch -r还能看到
1. git remote prune --dry-run origin 查看当前有哪些是该消失还存在的分支

  

2. git remote prune origin 删除上面展示的所有分支

  

3. git fetch --prune origin

  如果没有结果输出说明已经删除完成了

### 删除git、gitlab的分支
删除本地分支
git branch -d dev 【git branch -参数 本地分支名称】
删除远程分支
git push origin --delete dev 【git push origin --参数 远程分支名称】  
### gitlab设置分支保护
https://www.cnblogs.com/panwenbin-logs/p/11212359.html
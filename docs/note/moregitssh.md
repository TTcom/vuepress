### Git配置多个SSH key

1、执行命令 ssh-keygen -t rsa -C "email@company.com" -f ~/.ssh/id_rsa <br/>
- email@company.com这个邮箱是你的仓库绑定的邮箱
- id_rsa 是你本地生成ssh文件的文件名称这里可以自己命名
- 然后一路回车就可以了

接下来在config文件中进行配置（没有的话需要新建一个config文件）
config文件示例
```html

# github
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_rsa
    User dayingxiong

# gitee
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_gmail
    User captain

```
### 查看SSH Key是否添加成功
```js
ssh -T git@gitee.com
ssh -T git@github.com
```
///下面是一些解释可以忽略不看
- //默认的输出文件就是根目录下的.ssh/id_rsa 你需要重新指定一个文件名 
   //如：.ssh/id_rsa_emal1 文件名如何定义自行决定
   Enter file in which to save the key (/Users/a58/.ssh/id_rsa): <!-- 这里填写你要生成的ssh的文件-->
- 接下来一路回车
- 在你本地的~/.ssh/ 下面新建config文件 文件里面添加如下内容


::: tip config文件中的内容
   
<span>#</span> gitlab   &nbsp;&nbsp;//自己任意定义的名字  <br>
Host github.com  &nbsp;&nbsp;//ssh关联的主机名 <br>
Port 22   &nbsp;&nbsp;//端口号 <br>
HostName github.com   &nbsp;&nbsp;//要登录主机的主机名（建议与Host一致）<br>
PreferredAuthentications publickey <br>
IdentityFile C:\Users\tong.yifang\.ssh\id_github      &nbsp;&nbsp;//生成的ssh的地址<br>
User ttcom      &nbsp;&nbsp;//登录名 <br>

多个的话以此类推

<span>#</span> gitlab22   &nbsp;&nbsp;//自己任意定义的名字  <br>
Host github.com  &nbsp;&nbsp;//ssh关联的主机名 <br>
Port 22   &nbsp;&nbsp;//端口号 <br>
HostName github.com   &nbsp;&nbsp;//要登录主机的主机名（建议与Host一致）<br>
PreferredAuthentications publickey <br>
IdentityFile C:\Users\tong.yifang\.ssh\id_github      &nbsp;&nbsp;//生成的ssh的地址<br>
User ttcom      &nbsp;&nbsp;//登录名 <br>


### Git配置多个SSH key

- 执行命令 ssh-keygen -t rsa -C "emal1@163.com" //这个邮箱是绑定的git仓库的邮箱
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

:::
- 测试是否关联成功 ssh -T git@github.com
- 输出的内容中包含success则为成功了

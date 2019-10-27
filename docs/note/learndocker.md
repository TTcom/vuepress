### learndocker
#### 首先通过xshell连接云主机
- yum update   升级所有的包，更新系统

- yum install git   安装Git
- mkdir /usr/projects    新建用户项目目录
- ssh-keygen -t rsa -b 4096 -C "1902305073@qq.com"  
生成github ssh公钥 -t rsa使用rsa算法 -b 4096大小字节为4096
- cat /root/.ssh/id_rsa.pub  
查找生成的秘钥并拷贝出来并关联到github上
- clone github上面的项目到projects中
- 安装nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
- 将nvm配置到环境变量中,执行以下脚本
. /root/.bashrc
- 安装最新的稳定版本的node
nvm install stable
- 安装nrm用来切换npm源
npm install nrm -g

- 将npm切换为taobao源
nrm use taobao

#### 安装docker 
- yum install -y yum-utils \
           device-mapper-persistent-data \
           lvm2
 首先安装依赖包
- yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
	添加阿里云镜像
- yum install docker-ce docker-ce-cli containerd.io	
安装docker-ce 社区版docker（免费）

#### 在docker中安装系统需要阿里云镜像加速
- 首先新建docker文件 mkdir -p /etc/docker
- 配置镜像加速器 阿里云网址（[](https://cr.console.aliyun.com/cn-beijing/instances/mirrors)）
- tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://40lrm95m.mirror.aliyuncs.com"]
}
EOF
- systemctl restart docker 重载docker
- systemctl restart docker 重启docker
- npm i pm2 -g  安装pm2
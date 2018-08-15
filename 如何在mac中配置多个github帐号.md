# 如何在mac中配置多个github帐号？

## 起因 
在公司需要使用公司邮箱提交代码，下班后想学新东西需要提交代码到个人github上，这就有了在同一台mac本上配置两个Git帐号的需求。

## 步骤
要配置两套ssh key以及config配置文件

1. 因为.ssh文件夹是隐藏文件，可以使用命令行打开默认路径的.ssh文件夹，查看ssh key配置状态,打开终端（terminal）输入

``` java
open ~/.ssh
```
回车，会打开默认路径下的.ssh文件夹，如图1-1所示。如果以前配置过ssh的话，会看到id_rsa和id_rsa.pub两个文件，其中.pub是public的缩写也就是公钥，里面的内容要复制一份
到github中。

<center> 图1-1 </center>
ps:.ssh文件夹默认路径是/users/yezhu/.ssh中，是隐藏文件，也可以通过以下命令进入：
``` java
 $ cd /users/yezhu #切转到yezhu目录下
 $ ls -all         #ls 是显示此目录下的文件 ls -all 是显示隐藏文件在内的所有文件
$  cd .ssh         #切到ssh文件中 
```

2. 使用个人帐号（邮箱）通过命令“ssh-keygen -t rsa -C “personal-Email” ” 生成ssh key
往常的说法是连续3次回车，第一次回车对应的内容是 Enter file in which to save the key (/Users/yezhu/.ssh/id_rsa): id_rsa_personal 需要填写文件名，如果不写的话就是默认id_rsa文件，会把之前的覆盖掉，所以我这里写的是id_rsa_personal;第二次和第三次都是声明是否需要为文件设置密码，默认即为不设置，所以这里联系2次回车。
此时在文件.ssh 文件夹中会多了id_rsa_personal和id_rsa_personal.pub文件。

3. 配置config文件
在terminal中.ssh路径下创建config文件,输入命令：
``` java
vi config
```
在弹出的config文件中填写：
``` java
#配置公司工作邮箱(bjwlxie@cn.***.com) 
Host github.com 
HostName github.com 
User git 
IdentityFile ~/.ssh/id_rsa_work    #路径一定要对，指向.ssh 文件夹中的id_rsa_work

#配置个人帐号邮箱(tom1xie@163.com) 
Host tomxie 
HostName github.com 
User git 
IdentityFile ~/.ssh/id_rsa_personal  #路径一定要对，指向.ssh 文件夹中的id_rsa_personal
```
其中Host\HostName\User 选择默认的即可。IdentityFile 指向对应的秘钥文件，这里需要把id_rsa_personal改成你自己的秘钥文件即可。
在命令行末行模式下输入 :wq 保存次config文件并推出到shell下。
在terminal中.ssh路径下输入 vim config 可查看config文件内容。

ps:
编辑文件内容时在末行模式下，
输入命令  
:wq 
Vi将先保存文件，然后退出Vi返回到shell。

在末行模式下，
输入命令
:q!
Vi放弃所作修改而直接退到shell下。

4. 启动ssh-agent环境并添加生成的ssh keys
1）启动ssh-agent环境，rang n
在terminnal中输入命令：
``` java
eval "$(ssh-agent -s)" # start the ssh-agent in the background
```
出现 Agent pid ***  意味着开启成功

2）逐个添加生成的ssh keys 到ssh-agent中
在terminnal中输入命令：
``` java
ssh-add -K ~/.ssh/id_rsa_work
```
结果：Identity added:...

``` java
ssh-add -K ~/.ssh/id_rsa_personal
```
结果：Identity added:...

3)ps补充：
ssh-agent 会开启一个进程运行在后台，相当于一个服务。每隔几十秒向用 SSH 连接的服务器发送数据，由此服务器就不会自动断开跟你的 SSH 连接了。“还在吗 ~ ”。 也因此有时候电脑重启之后需要重新启动ssh-agent令之运行在后台，Windows用户经常要手动启动。

5. 测试配置
在terminal中输入以下命令，检查之前配置是否正确：
``` java

$ ssh -T git@github.com
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
$ ssh -T git@github.***.com  #公司企业github
Hi username! You've successfully authenticated, but GitHub does not provide shell access.

```
说明之前的配置是正确的。

6. 应用 clone个人github项目上测试

yezhudembp:~ yezhu$ git clone git@github.com:Tom1Xie/Learn_ShopMall.git
Cloning into 'Learn_ShopMall'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.

说明是配置成功的。

整体上图如1-5 所示：


大家有问题或疑问可以留言或者私信我。
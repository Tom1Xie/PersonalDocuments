# Travis

## 简介
为提高软件开发的效率，构建和测试的自动化工具层出不穷。 Travis 就是其中之一。

Travis 提供持续集成服务，绑定github上的代码，只要有新的代码，就会自动抓取，提供一个运行环境、执行测试、完成构建。
持续集成指的是只要代码有变化，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码merge到主干。

Travis 会和github中的仓库同步，选择travis帮你构建的仓库，一旦激活，travis会坚挺这个仓库的所有变化

## 作用
1. 提供效率
2. 专业化开发流程

## 流程
.travis.yaml文件

Travis要求项目根目录下面必须有一个.travis.yaml文件。这类似与配置文件一旦仓库中有新的commit，Travis就会去找这个文件，执行其中的命令。

``` java
language: python
sudo: required
before_install: sudo pip install foo
script: py.test
```
解释：

1. 运行环境是python
2. 需要sudo权限
3. 安装依赖之前需要安装foo模块，然后执行脚本py.test


## 运行流程
install  安装需要的依赖
script   运行脚本  //用来指定构建或测试脚本


## 实例 node项目

```javascript
language:node_js  //运行环境
node_js:- "8"
install npm install
script npm test

```


***[Click here jump to learn about building a JavaScript and Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)***

部署：
script阶段结束以后，可以设置通知步骤和部署步骤
部署的脚本可以在script阶段执行，比如部署到 Github Pages

```
  deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  on:
    branch: master
```



## 运行状态（结果）

```
passed：运行成功，所有步骤的退出码都是0
canceled：用户取消执行
errored：before_install、install、before_script有非零退出码，运行会立即停止
failed ：script有非零状态码 ，会继续运行
```


##  使用补充
1. 环境变量
2. 加密文件
3. 加密信息


___
实际测试：
## purpose
1. 个人github--Tom1Xie 中personaldocuments 和 travis 绑定同步

2. 在postman中的导入link 
    > https://www.getpostman.com/collections/f6fbf7036bd5a6d1edd3 

并对此collection生成.json文档 放到git项目文档中


3. 然后编写.travis.yml文件

___


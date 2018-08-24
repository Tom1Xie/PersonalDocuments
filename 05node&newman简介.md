newman是为postman而生，专门用来运行postman编写的脚本


npm是nodejs的包管理器，在nodejs上开发时，会用到很多别人已经写好的javascript代码，如果每当我们我们需要别人的代码时，都根据名字搜索一下，下载源码
，解压再使用会相当麻烦。于是就出现了包管理器npm。  开发者把写好的代码上传到npm官网上，如果使用某个模块直接通过npm安装就好，而且npm会根据
依赖关系把所有依赖的包都下载下来并管理起来


Node Package Manager，是一个NodeJS包管理和分发工具，可以让javascript开发者能更加轻松的共享代码和共享


nodejs时javascript的一种运行环境，是对Google V8引擎进行的封装

如何安装配置
为什么使用npm？

下载完的代码放到node_modules目录中，可以随意使用

package.json



Acquisition Attempt Failed!!! Clearing pending acquires. 
While trying to acquire a needed new resource, we failed to succeed more than the maximum number of allowed acquisition attempts (30).
Last acquisition attempt exception: 
com.mysql.jdbc.exceptions.MySQLNonTransientConnectionException: Client does not support authentication protocol requested by server; consider upgrading MySQL client
	at com.mysql.jdbc.SQLError.createSQLException(SQLError.java:921)



    newman run /Users/yezhu/Desktop/Gaia_IBMCloud_API\ copy.postman_collection.json --reporters html --reporter-html-export 

    newman run /Users/yezhu/Desktop/Gaia_IBMCloud_API\ copy.postman_collection.json --reporters html --reporter-html-export /Users/yezhu/Desktop/result_test.html
    npm install newman-reporter-html





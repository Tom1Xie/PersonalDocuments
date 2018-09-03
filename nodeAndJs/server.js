/**
 * function：创建一个可以工作的http服务器
 * aim:在浏览器http://localhost:8787/ 就能看到输出的hello big ass
 */
var http = require("http");  //1.请求node自带的http 模块
var url = require("url");

function startServer(route,handle) {
    function onRequest(request,response) {
        //3.从request中解析url
        var pathName = url.parse(request.url).pathname;
        console.log("the request path is "+ pathName);
        //4.路由分发
        route(handle,pathName);

        console.log("Request received");
        response.writeHead(200,{"Content-Type": "text/plain"});
        response.write("Hello big asssss");
        response.end();
    }
    
    http.createServer(onRequest).listen(8787); //2. 制定http服务器监听的端口号
    
    console.log("server has started");
    
}

exports.startServer = startServer;


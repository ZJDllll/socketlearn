//var http = require('http');
//http.createServer(function(request,response){
//    // 发送 HTTP 头部
//    // HTTP 状态值: 200 : OK
//    // 内容类型: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // 发送响应数据 "Hello World"
//    response.end('Hello World\n');
//}).listen(8888);
//
//// 终端打印如下信息
//console.log('Server running at http://127.0.0.1:8888/');


//var http=require('http');
//var url=require('url');
//function start(route){
//    function onRequest(request,response){
//        var pathname =url.parse(request.url).pathname;
//        console.log("pathname: "+pathname);
//
//        route(pathname);
//
//        response.writeHead(200,{"Content-type":"text/plain"});
//        response.write("hello world");
//        response.end();
//
//    }
//    http.createServer(onRequest).listen(8888);
//    console.log("sever on");
//}
//exports.start=start;

var http = require('http');
var fs   = require('fs');
var url  = require('url');
 http.createServer(function(request,response){
     var pathname=url.parse(request.url).pathname;
     console.log("shucchu: "+pathname);
     fs.readFile(pathname.substr(1),function(err,data){
         if(err) {
             response.writeHead(404,{'Content-Type': 'text/html'});// 404 NO FOUND
         }else{
             response.writeHead(200,{'Content-Type': 'text/html'});//HTTP 状态码 200 OK
             response.write(data.toString());
         }
         response.end();
     });
 }).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
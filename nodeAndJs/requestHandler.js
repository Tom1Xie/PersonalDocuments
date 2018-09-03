/**
 * function：对每一个请求处理程序
 */

 function start() {
     console.log("Request handler 'start' was called");
     console.log(".........one call end..........");
 }

 function uploadPicture() {
     console.log("Request handler 'uploadPicture' was called");
     console.log(".........one call end..........");
 } 

 exports.start = start;
 exports.uploadPicture = uploadPicture;
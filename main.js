/**
 * Created by gt623 on 2016/11/28.
 */
var fs=require("fs");
var events=require('events');

var eventEmitter =new events.EventEmitter();

fs.readFile('input.txt',function(err,data){
    if(err) {
        eventEmitter.emit('data-fail') ;}else{
    console.log(data.toString());
    eventEmitter.emit('data_received');}
});

eventEmitter.on('data_received',function(){
    console.log("data su");
});
eventEmitter.on('data-fail',function(){
   console.log("data-fail")
});
console.log("OVER")
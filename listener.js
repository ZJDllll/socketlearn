/**
 * Created by gt623 on 2016/11/28.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();
var listener1=function listener1(){
    console.log("1_on");
}
var listeren2=function listener2(){
    console.log("2_on");
}
//��
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listeren2);
//����
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"num");
//����
eventEmitter.emit('connection');
//���1
eventEmitter.removeListener('connection',listener1);
console.log('1-off');
//����
eventEmitter.emit('connection');
//num
eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"num");
 console.log('over')
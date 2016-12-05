/**
 * Created by gt623 on 2016/12/3.
 */
const child_process=require('child_process');
const fs=require('fs')
for(var i=0;i<3;i++) {
    var workerProcess = child_process.exec('node support.js '+i,function(error,stdout,stderr){
        if(error){
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout:'+stdout);
        console.log('stderr:'+stderr);
    })
    workerProcess.on('exit',function(code){
        console.log('子进程已退出，退出码'+code);
    })
}
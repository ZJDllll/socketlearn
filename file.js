/**
 * Created by gt623 on 2016/11/29.
 */
var fs=require("fs");
var buf=new Buffer(1024);
fs.open('input.txt','r+',function(err,fd){//open file
    if(err) return err;
    console.log("jiequ");

    fs.ftruncate(fd,10,function(err){//cut txt
            if(err) return err;

        fs.read(fd,buf,0,buf.length,0,function(err,byetes){
            if(err) return err;
            console.log(buf.slice(0,byetes).toString());

            fs.close(fd,function(err){
               if(err) return err;
               console.log("close-succ")
           }) ;
        });

        });
});




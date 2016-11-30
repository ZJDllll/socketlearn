/**
 * Created by gt623 on 2016/11/30.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var fs=require('fs');
var multer=require('multer');
app.use(express.static('public'));
var urlencodedParser=bodyParser.urlencoded({extended:false});
//app.use(multer({dest:'/tmp/'})).array('image');
var upload=multer({dest:'tmp/'});
app.get('/',function(req,res){
    res.send('hell world yoo!');
})
app.post('/',function(req,res){
    console.log("post req");
    res.send('helo post!');
})
app.get('/del_user',function(req,res){
    console.log("del_user on")
    res.send("del_user");
})
app.get('/list_user',function(req,res){
    console.log("list_user on")
    res.send("list_user");
})

app.get('/ab*cd',function(req,res){
    console.log("/ab*cd on")
    res.send("正则匹配");
})
app.get('/index1.html',function(req,res){
    res.sendFile(__dirname+"/"+"index1.html");
})
//app.get('/process_get',function(req,res){
//    response={
//        first_name:req.query.first_name,
//        last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
//})
app.post('/process_post',urlencodedParser,function(req,res){
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/upload',upload.array('image',3),function(req,res){
    console.log(req.files[0]);

    var des_file=__dirname+"/image/"+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                responsef={
                    message:'File upload successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log(responsef);
            res.end(JSON.stringify(responsef));
        })
    })
})
var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("test adress: http://%s:%s",host,port);
})
/**
 * Created by gt623 on 2016/12/3.
 */
var express =require('express');
var app=express();
var fs =require('fs');
var user={
    "user4" :{
        "name" : "mohit",
        "password": "123456",
        "prsfession" : "teacher",
        "id":"4"
    }
}
app.get('/listuser',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    })
})
app.get('/adduser',function(req,res){
    fs.readFile(__dirname+"/"+"user.json","utf8",function(err,data){
        data=JSON.parse(data);
        data["user4"]=user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
app.get('/:id',function(req,res){
    fs.readFile(__dirname+"/"+"user.json","utf8",function(err,data){
        data=JSON.parse(data);
        var users=data["user"+req.params.id]
        res.end(JSON.stringify(users));
    })
})
var server =app.listen(8081,function(){
    var host =server.address().address;
    var port =server.address().port;
})
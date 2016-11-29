/**
 * Created by gt623 on 2016/11/29.
 */
var server=require('./server');
var route=require('./route');
server.start(route.route);
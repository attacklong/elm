const api = require('./api'); 
// 引入文件模块
//引入接口
var api=require('./api');
var fs=require('fs');
var path=require('path');
//bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
var bodyParser=require('body-parser');
var express=require('express');
var app=express();

//将插件放入项目中
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(api);
app.use(express.static(path.resolve(__dirname,'../dist')));

//因为是单页面 所有请求都走/dist/index.html
app.get('*',function(req,res){
    const html=fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8')
    res.send(html)
})
//监听端口
app.listen(8811);
console.log('连接上后台')
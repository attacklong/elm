//获取到对象
var models=require('./db.js');
//使用node用的是express
var express=require('express');
//用的是路由中间件
var router=express.Router();

router.get('/api/list/showlist',(req,res)=>{
    models.list.find((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
            console.log(data)
        }
    })
})
module.exports=router;
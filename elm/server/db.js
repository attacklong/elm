var mongoose=require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/test',{ useMongoClient: true });

const db=mongoose.connection;
db.once('error',()=>console.log('链接数据库失败'));
db.once('open',()=>console.log('链接数据库成功'))
//创建模型
const listSchema=mongoose.Schema({
    title:String,
    author:String,
})
//创建对象
const Models={
    list:mongoose.model('list',listSchema,'list'),
}
module.exports=Models;
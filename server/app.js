var express=require('express');

 
//引入模块
var admin =require('./routes/admin');
 
var app=new express();   //实例化

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static('static/img')); // 设置静态图片访问的路径 http://localhost:3001

 
app.use('/admin',admin);  //后台(路由)  http://localhost:3001/admin
// app.use('/',admin);     //默认加载前台(路由)
 


// 监听3001端口
app.listen(3001, () => {
    console.log('服务器运行中,http://localhost:3001/');
})
 
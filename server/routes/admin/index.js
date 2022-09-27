const express=require('express');
const router = express.Router();   //可使用 express.Router 类创建模块化、可挂载的路由句柄
 
const article=require('./article');
const user=require('./user');
 
//配置路由
router.use('/article',article);   // http://localhost:3001/admin/article
router.use('/user',user);    // http://localhost:3001/admin/user
 
module.exports = router;   //暴露这个 router模块
 
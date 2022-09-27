var express=require('express');
var router = express.Router();   //可使用 express.Router 类创建模块化、可挂载的路由句柄



// http://localhost:3001/admin/article
router.get('/',function(req,res){
    res.send();
});
 
 
module.exports = router;   //暴露这个 router模块
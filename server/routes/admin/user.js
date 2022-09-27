const express = require("express");
const multer = require("multer");
const router = express.Router(); //可使用 express.Router 类创建模块化、可挂载的路由句柄
var fs = require("fs");

let sendData = (data,code=200,msg='success')=>{
  return {
    code,
    msg,
    data
  }
}


//图片上传
router.post(
  "/upload",
  multer({
    //设置文件存储路径
    dest: "static/img"
  }).array("file", 1),
  (req, res) => {
    let files = req.files;
    let file = files[0];
    console.log('file', file)

    let fileInfo = {};
    let fileName = Date.now().toString() + "_" + file.originalname
    let path = "static/img/" + fileName;
    fs.renameSync("./static/img/" + file.filename, path);
    //获取文件基本信息
    fileInfo.type = file.mimetype;
    fileInfo.name = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = path;
    fileInfo.imgUrl = 'http://localhost:3001/' + fileName
    res.json({
      code: 0,
      message: "OK",
      data: fileInfo
    });
  }
);

// http://localhost:3001/admin/user/login
router.get("/login", function (req, res) {
  const { user } = require('../../data')
  res.send(sendData(user));
});



// http://localhost:3001/admin/user
router.get("/", function (req, res) {
  
});

module.exports = router; //暴露这个 router模块

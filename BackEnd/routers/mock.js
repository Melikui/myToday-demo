"use strict";

const express = require("express");
const router = express.Router();

// const Check = require("../middlewares/check");

const Get = require("../controller/mock/get");
const Post = require("../controller/mock/post");
const Mock = require("../controller/mock/mock");


router.get("/get", Get.getApi); // 模拟get请求
router.post("/post", Post.postApi); // 模拟post请求
router.post("/mock", Mock.mockApi); // 模拟mock


module.exports = router;

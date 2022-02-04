"use strict";
//view를 관리하는 파일
const express = require("express");
//라우터 사용하려면 express.Router()
const router = express.Router();

const ctrl = require("./home.ctrl");

// home.ctrl.js에서 불러온 home,login
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
//사용자가 입력한 정보를 처리해줌
router.post("/login", ctrl.process.login);

module.exports = router;

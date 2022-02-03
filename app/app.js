"use strict";
//모듈
const express = require("express");
const app = express();
//라우팅
const home = require("./src/routes/home");
//포트
//앱 세팅, 기본 폴더를 views로, 파일형식은 ejs로
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //use는 미들웨어등록해주는 메서드

module.exports = app;

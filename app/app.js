// //http는 내장모듈로 내장서버
// //express에 비해서 코드가 지저분해짐
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인화면입니다.");
//   }
//   console.log(req.url);
// });

// app.listen(7001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

//-------------------------------------------

"use strict";
//모듈
const express = require("express");
const app = express();
//라우팅가능하게 home에 담아줌
const home = require("./src/routes/home");
//포트
//앱 세팅, 기본 폴더를 views로, 파일형식은 ejs로,화면 뷰를 처리해주는 엔진 ejs
app.set("views", "./src/views");
app.set("view engine", "ejs");
//노드에서 js파일로 접근하기위해서는 미들웨어 등록, static으로 정적경로추가
//현재 디렉토리 name가져오는 dirname
app.use(express.static(`${__dirname}/src/public`));
//express에서 json 파싱할수있게 해줌 = json형태로 응답함, 원래 body-parser
//를 사용해야했으나 express에 먹혀서 쓸수있음
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home); //use는 미들웨어등록해주는 메서드

module.exports = app; //밖에서 app쓸수있게 내보내줌

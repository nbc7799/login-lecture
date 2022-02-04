"use strict";
//기능을 수행하는 ctroller파일
// views home에있는 페이지들을 res해서 클라이언트가사용할수있게해줌

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    //res.render 설정된 템플릿 엔진을 사용해서 views를 렌더링
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

//사용자가 req 보내면 입력한 정보 담아서 출력
const process = {
  login: (req, res) => {
    // POST 정보를 가짐, 파싱을 위해서 body-parser와 같은 패키지가 필요
    const id = req.body.id,
      password = req.body.password;
    const users = UserStorage.getUsers("id", "password");
    //body에 id와 password는 user가 입력한 값

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

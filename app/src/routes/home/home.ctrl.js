"use strict";
//기능을 수행하는 ctroller파일
// views home에있는 페이지들을 res해서 클라이언트가사용할수있게해줌
const output = {
  home: (req, res) => {
    //res.render 설정된 템플릿 엔진을 사용해서 views를 렌더링
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["jun", "jin", "김씨"],
  password: ["1234", "1234", "123456"],
};

//사용자가 req 보내면 입력한 정보 담아서 출력
const process = {
  login: (req, res) => {
    // POST 정보를 가집니다. 파싱을 위해서 body-parser와 같은 패키지가 필요
    const id = req.body.id,
      password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      mas: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};

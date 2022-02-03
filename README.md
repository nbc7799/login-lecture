# node.js 백앤드 맛보기

## 1. 개발환경 세팅

- 폴더하나 만들고 npm init하면 package.json파일 만들어짐
- node 설치
- git

## 2. express로 서버 띄우기

- mkdir로 폴더만들수있음
- npm i express --save // express 설치
- const express = require("express"); // require로 express불러오고
- const app = express(); // app에 할당
- listen(port-number,) // 포트넘버 지정해줄수있음

```
- app.get('/', (req, res) => {
  res.send('여기는 루트입니다')
  }
```

'/'루트경로로 들어가면 send('여기는루트입니다')표시

## 3. express말고 http로 서버 띄우기

- http는 내장모듈로 설치없이 실행가능
- express에 비해서 코드가 지저분해짐

## 4. 로그인 화면 만들기

- index.html에 작성한 로그인화면 app.js에 send안에 넣어서 하드코딩

## 5. 로그인뷰 최적화, MVC의 View 분리

- app.set('views', './views') // 두번째파라미터에 views 폴더이름, set으로 앱세팅해줌
  -app.set("view engine", "ejs"); // send안에 있는 html코드를 어떤 엔진으로해석할지 정해줄수있음,ejs사용
- 루트 index와 로그인 login.ejs로 구분
- res.render("home/index"); render로 이동가능

## 6. 라우팅 분리

- 이 형태의 라우팅을 좀더 나누기위해 파일 분리

```
app.get('/', (req,res)=>{
 res.render("home/index");
 })
```

- const router = express.Router(); 사용
- home.ctrl.js에 변수생성후 페이지두개 담아줌

```
const hello = (req, res) => {
  res.render("home/index");
};
```

- const PORT = 7000; //port변수 분리

```

app.listen(PORT, () => {
console.log("서버 가동");
});

```

- use는 미들웨어를 등록해주는 메서드(뭔지모름)

## 7. MVC의 C(컨트롤러)분리하기

- router는 단순히 도메인으로 들어왓을때 요청을 수행하고
  res.render("home/index"); // 이부분에서 기능을수행함
- 이걸 분리해서 home.ctrl.js에 담아줌
- router.get("/", ctrl.hello); // 조금더 명확하게 분리됨

## 9. app.listen()모듈화

- www.js파일 안에다가 app.listen 넣어주기
- app이 파일안에 없으니 require로 불러오기

```
const app = require("../app");

app.listen(PORT, () => {
  console.log("서버 가동");
});
```

## 10. package.json, node-modules 알아보기

- npm init하면 내가만든 페키지 초기화해주는데 package.json파일
  에서 확인가능
- bin은 실행파일
- dependencies는 의존하고 있는 패키지모듈들
- devdependencies는 개발할때만 필요한것
- 스크립트는 패키지에 사용하고싶은 명령어들,start로 서버실행명령어설정가능
- lock.json은 좀더 명확한 버젼이 명시,

## 11. 깃,깃허브 관리

## gogogo

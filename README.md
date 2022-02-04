# node.js 백앤드 맛보기

## 1. 개발환경 세팅

- 폴더하나 만들고 npm init하면 package.json파일 만들어짐
- node 설치
- git

## 2. express로 서버 띄우기

- express는 node.js에서 동작하는 프레임워크, nodejs로 개발쉽게 도와주는데 미들웨어 구조덕분에 가능
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

## 11. Restful API

- Rest는 서버와 클라이언트가 통신하기위한 규칙
- 기본적으로 HTTP를 사용해 클라이언트와 서버가 통신,데이터주고받음
- REST는 자원의 표현을 가지고 상태를 전송한다.
  RE : Representational(표현),
  S : State(상태),
  T : Transter(전송)
- 자원은 URI , 표현은 Header로 전달가능하며 클라이언트가 전달 받고자 하는 데이터, 데이터타입같은거 명시가능, 상태는 모두 method로 나타내는데
  get(조회,페이지가져옴), post(생성,정보전달), put(수정), delete(삭제) 등
- 즉 유튜브 접속하면 동영상들이라는 자원들을 uri로 명시하고
  전달한다
- Rest는 간단히말해 사이트 구성원리, 여기에 ful이붙으면 Rest한
  Restful API는 사이트 구성원리를 준수하는 API
  -dd

## 12. express()함수

- express.json() 들어오는 req를 JSON데이터로 파싱하며, body parser를 기반으로 함
- express.static() 정적파일을 제공하며, serve-static기반으로 함
- express.Router() 새 router 객체를 생성
- express.urlencoded() 들어오는 req를 urlencoded데이터로 파싱하며 body-parser를 기반

## 13. req객체

- req.body : POST정보를 가짐,파싱위해 body-parser필요하나 express에
  들어있음,
- req.query : GET정보를 가짐, url로 전송된 쿼리 스트링 파라미터가짐
- req.params : 내가이름붙인 라우트 파라미터 정보가짐
- req.headers : http의 header 정보를 가짐

## 14. res객체

: Express 서버가 HTTP요청 받게되면 res를 반환함

- res.send 다양향 유형의 응답을 전송함(기본전송역할)
- res.redirect 브라우저를 리다이렉트함
- red.render 설정된 템플릿 엔진사용해 views를 렌더링
- res.json JSON응답을 전송함(웹개발자들이 데이터 주고받을때 보통 RESTful API형태로 주고받는데 이때 보통 JSON형태가 많음, 자동으로
  JSON으로 바꿔줌)
- res.end 응답 프로세스를 종료함

## 15. 미들웨어란?

- 클라이언트에서 요청오고 그 요청보내기 위해 응답하려는 중간에서 목적에 맞게 처리해주는 함수들
- app.use안에 있는 모든 함수들은 모두 미들웨어이며 요청올때마다 이 미들웨어 거쳐서 클라이언트에게 응답
- 미들웨어 함수는 res(요청), res(응답), 어플리케이션 요청-응답 사이클 중 그 다음의 미들웨어 함수에 대한 엑세스 권한을 갖는 함수
- express.static은 어떤 파일을 읽을때 사용, 원하는 값을 public폴더에서 불러옴, 불러오는 모든 파일의 src는
  \_\_dirname/public이 됨

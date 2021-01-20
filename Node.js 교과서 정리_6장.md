# 6장 express



미들웨어

.use

라우터에 붙어 있는 매개변수와 함수들

라우터

.get('/')

.post('/')

...

와일드카드



순서

1. express 세팅
2. 미들웨어
3. 라우터(와일드카드는 하단)
4. 에러 미들웨어



express body-parser? 쓰면 옛날 새럼이다



라우터 분리하기

- router 폴더 안에 파일을 router로 exports



### 넌적스: view engine

- html은 정적 언어
- 자바스크립트로 html 렌더링
- ex. 퍼그, ejs
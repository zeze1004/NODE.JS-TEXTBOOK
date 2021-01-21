# 8장 몽고디비

### 1. NoSQL

- SQL: 테이블, 로우, 컬럼
- NoSQL: 컬렉션, 다큐먼트, 필드



### 2. 실행

- 몽고 디비 폴더에서 .\mongod 실행

- mongo.exe 로 쉘 창 키기

```javascript
// 관리자 계정 설정
use admin
switched to db admin
> db.createUser({user: 'zeze', pwd: '0000', roles: ['root']})
Successfully added user: { "user" : "zeze", "roles" : [ "root" ] }
```

- .\mongod 실행한 쉘 창 끄고 ./mongod --auth ㄱㄱ
- 흑흑 로그인 웨않되?
- 



### 4. 몽고디비 터미널 명령어

- use 데이터베이스명:  데이터베이스 만드는 명령어
- show dbs: 데이터 베이스 목록 확인
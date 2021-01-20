# 5장 npm



### 1. npm이란

- 노드 패키지 매니저

- 모듈화된 코드 

- #### npm 버전: SemVer 버저닝

  Major(주 버전, 대대적 업그레이드) - Minor(부 버전, 하위 버전과 호환되는 수정) - Patch(수 버전)

  - 주 버전이 다르면 호환 안 됨
  - ^1.4.5: Major은 무조건 일치해야 한다
  - ~1.19.0: Minor까지는 일치해야 한다

### 2. package.json

- 현재 프로젝트에 대한 정보와 사용 중인 패키지에 대한 정보를 담은 파일
- 노드 프로젝트 시작 전 터미널에 `npm init`으로 만듦
- `npm start` 같은 명령어는 `scripts`에서 쓸 수 있음
- `dependencies`: npm 모듈의 버전 기록 -> 다른 곳에서 깔아도 같은 버전을 깔아줌
- `devDependencies`: 개발할 때만 쓰는 패키지 버전, 배포할 때는 사용되지 않음
- 배포된 파일을 받고 `npm i`하면 package.json에 적힌 npm 모듈 받을 수 있음



### 3. node_modules

- `express`모듈 하나 깔았어도 `node_modules`에 `express`를 쓸 때 필요한 다른 npm을 저장

- 보통 `gitignore`하고 배포



### 4. package-lock.json

- npm의 한 모듈깔 때 해당 모듈을 쓰기 위해 다른 모듈이 자동 설치, package-lock.json도 버전 기록(`dependencies`)



### 5. npm 명령어

[공식문서](https://docs.npmjs.com/cli/v6/commands)
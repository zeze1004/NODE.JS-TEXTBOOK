# 3장

### 1. REPL

cdm 창에서 node  실행 시: Read, Eval(해석), Print(반환), Loop(종료할 때까지 반복) 

* console.log()의 리턴값은 undefined

  

### 3. 모듈

- 파일 하나가 모듈 하나(파일 당 모듈 하나 사용 가능)

- 브라우저에서도 자바스크립트 모듈 만들 수 있음

  ```javascript
  // var.js
  const odd ='홀수';
  const even = '짝수';
  
  module.exports = {
      odd, // odd: odd도 가능, key : value 같으면 생략 가능
      even,
  };
  // 배열로 넘겨 줄 수 있음
  // module.exports = [odd, even];
  ```

  변수들을 저장한 `module` 객체가 되어 다른 파일에서 사용 가능

  ```javascript
  // var.js와 같은 경로의 func.js
  const value = require('./var');
  console.log(value); // {odd: '홀수', even: '짝수'}
  					// 모듈을 배열로 받아서 출력시: ['홀수', '짝수']
  ```

- 구조 분해 할당

  ```javascript
  // 구조 분해 할당 이용
  const {odd, even} =  require('./var');
  // 구조 분해 할당 이용 X
  const new_odd = value.odd;
  ```

- 다른 파일에서 받은 모듈을 exports 가능

- 자바스크립트 모듈 문법과 다르다. (호환 가능 하지만 작동 원리가 다르다.)

  ```javascript
  import {odd, even} = from './var';
  
  function check(number) {
      if(number % 2 == 0)
          return odd;
      else return even;
  }
  
  export default check;
  ```

  

### 4. 노드 내장 객체

- 외우지 말 것!



#### 1. global

- 브라우즈의 window 전역객체와 같이 node 전역객체

- 모든 파일에 접근할 수 있다.

- ex. `global.console` : 생략가능

- global 속성 공유

  위의 모듈 처럼 global 객체에 값을 대입하면 모든 파일에서 변수 공유할 수 있다. (쓰지말자!)



#### 2. console

- console.time

  ```javascript
  console.time('time');
  // ...
  console.timeEnd('time'); // -> 이 때까지의 시간 반환
  ```

- console.log

- console.error

- console.table : 객체가 테이블 형식으로 출력

- console.dir(객체, 옵션): 객체를 콘솔에 표시할 때

- console.trace(레이블): 에러가 어디서 발생했는지 추적,  `호출스택 로킹`



#### 3.  timer

##### 	백그라운드로 메소드를 보내 대표적인 비동기 함수

- setTimeout(콜백 함수, ms): ms 이후에 콜백 함수 실행

  ```javascript
  setTimeout(() => console.log('hi'));
  // 2초 후에 hi log에 찍힘
  ```

- setInterval(콜백 함수, ms): ms 이후에 콜백 함수 반복 실행

  ```javascript
  setInterval(() => console.log('hi'));
  // 2초 마다 hi log에 찍힘
  ```

- setImmediate(콜백 함수): 콜백 함수 바로 실행



#### 4. __filename, __dirname

- 현재 파일경로, 폴더 경로 return



#### 5. module,  exports, require

- module.exports와  exports 같이 사용될 수 없다.
- 보통 하나만 참조할 때는 `exports`, 여러 개 참조시 `module.exports` 사용



#### 6. this

- 웹 브라우저에서의 this는 전역 객체인 window 저장
- node의 this는 전역 스코프 anonymous(빈 객체)에 저장
- function() 안에 있는 this는 globla 객체


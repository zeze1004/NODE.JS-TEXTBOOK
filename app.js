const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();	// app 변수에 모듈 할당
												// app이 서버의 역할을 할 수 있음(모듈 내에 http 모듈 내장

//app.set(express를 사용할 때 전역적으로 사용되는 속성 설정)
// port를 따로 수정하지 않으면 port는 3000
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
// app.use(morgan('combined')); // 사용자 ip, 브라우저 등 세세한 정보 알려줌, 배포할 때 주로 사용
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); // true면 qs, flase면 query string
// 미들웨어: 라우터 실행 전 객체 전송?
// .use 미들웨어는 매개변수 3개
app.use((req, res, next) => {	// 경로를 추가하면 해당 경로만 미들웨어 실행
	console.log('1 모든 요청 실행');
	next();	// 다음 라우터 실행시킴
	// 에러 처리
	// throw new Error('에러 났음!'); // 보통 에러 미들웨어는 맨 아래에 넣는다
	// 미들웨어 연달아 실행 가능
// },(req, res, next) => {	
// 	console.log('2 모든 요청 실행');
// 	next();	// 다음 라우터 실행시킴
// }, (req, res, next) => {	
// 	console.log('3 모든 요청 실행');
// 	next();	// 다음 라우터 실행시킴
// }, (req,res,next) => {
// 	try {
// 		console.log('노 프라블럼');
// 	} catch(error) {
// 		next(error);	// next(): 바로 다음 구문 실행하지만 next(error) 에러 미들웨어 실행
// 	}
})

// '/' 경로로 가야 실행되므로 app.use() 다음에 실행 되지 않음
// app.get(주소, 라우터)												
app.get('/', (req, res) => {
	req.cookies;
	req.signedCookies;	// 암호화된 쿠키
	res.cookie('name', encodeURIComponent(name), {
		expires: new Date(),
		httpOnly: true,
		path: '/',
	})
	// 파일 전송
	res.sendFile(path.join(__dirname,'./index.html'));
});

// 
app.post('/', (req,res) => {
	res.send('hello express');
})

// 와일드카드 라우터는 라우터들 아래에 배치시키자
// node는 위에서 아래 실행, 겹치는 라우터가 있을 때 와일드카드 먼저 실행
app.get('/category/:name', (req, res) => {
	// 파일 전송
	res.send(`${req.params.name} page`);
});

// 서버가 클라이언트를 속일 수 있음
// app.use((req, res, next) => {
// 	res.status(200).send('정상작동');
// })

// 위의 요청이 다 실행되지 않아서 이 미들웨어 실행
// app.use((req, res, next) => {
// 	res.send('404');
// })

// 커스텀 에러 미들웨어
// 라우터에 있는 미들웨어에는 next 매개변수나 안쓰는 매개변수 ex.res, req 빼도 되지만
// 에러 미들웨어에서는 next 포함 매개변수 4개, 절대 빼서는 안 됨!
app.use((err, req, res, next) => {
	console.error(err);
	res.send('에러 발생, 다시 시작해주세요');
})

app.listen(app.get('port'), () => {
	console.log('서버 실행');
});

// app.listen(3000, () => {
// 	console.log('서버 실행');
// });


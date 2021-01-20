const express = require('express');
const path = require('path');
const app = express();	// app 변수에 모듈 할당
												// app이 서버의 역할을 할 수 있음(모듈 내에 http 모듈 내장


// app.get(주소, 라우터)												
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'./index.html'));
});

// 
app.post('/', (req,res) => {
	res.send('hello express');
})

//app.set(express를 사용할 때 전역적으로 사용되는 속성 설정)
// port를 따로 수정하지 않으면 port는 3000
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
	console.log('서버 실행');
});

// app.listen(3000, () => {
// 	console.log('서버 실행');
// });


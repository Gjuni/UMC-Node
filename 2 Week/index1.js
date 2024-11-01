// 필요한 라이브러리 불러옴
import express from 'express';
import dotenv from 'dotenv';

// express를 app에 실행
const app = express();
// 라이브러리 실행은 config 사용
dotenv.config();

/* app.set은 데이터를 저장하기 위한 메서드
    app.set('key', value) 꼴로 사용됨
    'port'를 key로 process.env.PORT로
    .env 파일에 우리가 정의한 PORT = 8080을 불러와서 value에 데이터(환경변수)에 저장함

    즉 port, 8080 꼴로 데이터를 저장함
*/
app.set('port', process.env.PORT);

app.get('/' ,(req, res) => {
    res.send('Hello world');
});

app.listen(app.get('port'), () => {
   console.log(app.get('port'), "에서 대기 중");
})

/** express 모델에 http 모듈이 내장되어있어 http를 따로 import할 필요 없음 */
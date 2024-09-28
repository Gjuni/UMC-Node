/** middleWare 
 *  express에서 아주 중요한 요소이다.
 *  요청과 응답 사이에서 에러처리나 서버에서 데이터 전송 삭제 등을 처리
*/

import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.set('port', process.env.PORT);

app.use((req, res, next) => {
    console.log('모든 요청에서 다 실행됨');
    next();
});

app.get('/', (req, res, next) => {
    // 첫번째 미들웨어 next() 매게변수를 사용해 다음으로 넘어가도록 처리
    res.send('Hello world');
    next();
    },
    // 두번째 미들웨어에서 에러를 발생
    (req, res) => {
        // 에러 처리
        throw new Error('이 에러를 에러 처리 미들웨어로 전송함');
    });

// 에러처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '에서 대기 중');
});
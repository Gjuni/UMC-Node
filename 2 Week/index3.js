/** 추가적인 미들웨어
 *  morgan
 */

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

const app = express();
dotenv.config();

app.set('port', process.env.PORT);

// 현재 폴더의 절대경로를 __dename 변수에 저장
const __dirname = import.meta.dirname;

/********************* 여기에 코드를 추가함 *********************/


app.use(morgan('dev')); 
/** 아래 미들웨어는 서버에서 정적 파일을 전달해주는 라우터 역할
 *  라우터란 해당 경로로 ('/') 길을 열어준다고 생각 */
app.use('/', express.static(path.join(__dirname, 'public')));

/** 아래 2개의 미들웨어는 클라이언트의 request의 본문을
 *  서버에서 사용할 수 있는 req.body 객체로 바꿔주는 미들웨어임.
 */
app.use(express.json());
app.use(express.urlencoded({extended : false}));

/********************* 여기에 코드를 추가함 *********************/

app.use((req, res, next) => {
    console.log('모든 요소에서 전부 실행');
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello world');
    next();
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'),' 에서 대기중');
});

// log 잘 나온다.
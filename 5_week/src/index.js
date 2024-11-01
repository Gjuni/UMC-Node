import dotenv from "dotenv"; /** dontev 라이브러리는 .env 파일로 부터 환경 변수를 읽어들임 */
import express from "express";
import cors from "cors";
import myspl from "mysql2/promise";
import {handleUserSignUp} from './controllers/user.controller.js' // 경로를 확인
import {handleStoreUpdateIndex, handleStoreLoationIndex } from './controllers/store.controller.js'
import { handleReviewAddIndex, handleReviewDelectIndex, handleReviewPutIndex } from "./controllers/review.controller.js";
import { handleMissionAddIndex, handleMissionUpdateIndex } from "./controllers/mission.controller.js";


dotenv.config(); // proccess.env. 객체를 통해 접근할 수 있도록 하는 역할

const app = express();
const port = process.env.PORT;                // 환경 변수 설정 수월하기 위해 사용 .env

app.use(cors());                              // cors 방식 허용
app.use(express.static('public'));            // 정적 파일 접근
app.use(express.json());                      // request의 본문을 json으로 해석할 수 있도록 함 (Json 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended:false})) // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/" , (res, req) => {
    res.send("Hello world!");
});

app.post("/api/v1/users/signup", handleUserSignUp); // 정해진 url로 POST 요청 시 'handleUserSignUp' 함수 실행

// store 업데이트
app.post("/api/v1/stores/update", handleStoreUpdateIndex);
// 특정 지역에 가게 조회
app.get("/api/v1/stores/location", handleStoreLoationIndex);

// 리뷰 업데이트
app.post("/api/v1/reviews/update", handleReviewAddIndex);
// 리뷰 삭제
app.delete("/api/v1/reviews/delect", handleReviewDelectIndex);
// 리뷰 수정
app.put("/api/v1/reviews/put", handleReviewPutIndex);


// 가게 미션 추가
app.post("/api/v1/stores/missions", handleMissionUpdateIndex);
// 미션 진행 중 미션 추가하기
app.patch("/api/v1/stores/missions", handleMissionAddIndex);


app.listen(port, () => {
    console.log(`listening port ${port}`);
});
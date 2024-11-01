import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import { storeLocationService, storeUpdateService } from "../services/store.service.js";

// index에 있는 StoreUpdate 요청을 받아 처리하는 함수
export const handleStoreUpdateIndex = async (req, res, next) => {
    console.log("store update 요청이 들어왔습니다.");
    console.log("body:", req.body);

    const store = await storeUpdateService(bodyToStore(req,res)); // storeUpdateService 함수를 호출 후 매게변수로 bodyToStore 함수를 호출
    res.status(StatusCodes.OK).json({result : store });
};

export const handleStoreLoationIndex = async (req, res, next) => {
    console.log("store location 요청이 들어왔습니다.");
    console.log("body:", req.body);

    const location = await storeLocationService(bodyToStore(req, res)); // storeLocationService 함수를 호출 후 매게변수로 req.query를 호출
    res.status(StatusCodes.OK).json({result : "store location"});
};
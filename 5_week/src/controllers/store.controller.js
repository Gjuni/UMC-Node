import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import { StoreUpdate, StoreLocation } from "../services/store.service.js";

export const handleStoreUpdate = async (req, res, next) => {
    console.log("가계를 추가 요청합니다.");

    const store = await StoreUpdate(bodyToStore(req,res));
    res.status(StatusCodes.OK).json({result : store });
};

export const handleStoreLocation = async (req, res, next) => {
    try {
        console.log("가계 위치를 요청합니다.");
        const store = await StoreLocation(req.query);

        res.status(StatusCodes.OK).json({result : store });
    } catch(error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message : error.message});
    }
}
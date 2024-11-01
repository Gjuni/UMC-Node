// 정상 작동하는지 점검 및 에러 도출

import { StatusCodes } from "http-status-codes";
import { bodyToReview } from "../dtos/review.dto.js";
import { addReviewService, reviewDelectService, reviewUpdateService } from "../services/review.service.js";

export const handleReviewAddIndex = async (req, res, next) => {
    console.log("review add 요청이 들어왔습니다.");
    console.log("body:", req.body);

    try {
        const review = await addReviewService(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({ result: review });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
};

export const handleReviewDelectIndex = async (req, res, next) => {
    console.log("review delect 요청이 들어왔습니다.");
    console.log("body:", req.body);

    try {
        const review = await reviewDelectService(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({ result: review });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
};

export const handleReviewPutIndex = async (req, res, next) => {
    console.log("review put 요청이 들어왔습니다.");
    console.log("body:", req.body);

    try {
        const review = await reviewUpdateService(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({ result: review });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
};
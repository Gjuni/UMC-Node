import { StatusCodes } from "http-status-codes";
import { bodyToReview } from "../dtos/review.dto.js";
import { reviewDelect, reviewUpdate } from "../services/review.service.js";


export const handleReviewUpdate = async (req, res) => {
    console.log("review update");
    console.log("body", req.body);

    try {
        const review = await recviewUpdate(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({ result: review });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error});
    }
}

export const handleReviewDelect = async (req, res) => {
    console.log("review delect");
    console.log("body", req.body);

    try {
        const review = await reviewDelect(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({ result: review });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error});
    }
}
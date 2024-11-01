// DTO 정보 받아서 response로 보내주는 역할

import { addReviewRepository, reviewDelectRepository } from "../respositories/review.repository.js";

export const addReviewService = async (data) => { 
    const reviewInfo = await addReviewRepository({ 
        memberId: data.memberId, 
        storeId: data.storeId, 
        review: data.review,
    });

    if(!reviewInfo) {
        throw new Error("리뷰 추가 실패");
    }
};

export const reviewDelectService = async (data) => {
    const reviewInfo = await reviewDelectRepository({
        reviewId: data.reviewId,
        memberId: data.memberId,
        storeId: data.storeId,
    });

    if(!reviewInfo) {
        throw new Error("리뷰 삭제 실패");
    }
};

export const reviewUpdateService = async (data) => {
    const reviewInfo = await reviewUpdateController({
        reviewId: data.reviewId,
        memberId: data.memberId,
        storeId: data.storeId,
        review: data.review,
    });

    if(!reviewInfo) {
        throw new Error("리뷰 삭제 실패");
    }
};
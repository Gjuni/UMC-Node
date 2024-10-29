import { addReview, delectReview } from "../respositories/review.repository";

export const reviewUpdateService = async (data) => {
    const reviewInfo = await addReview({
        memberId: data.memberId,
        storeId: data.storeId,
        review: data.review
    });

    if(!reviewInfo) {
        throw new Error("리뷰 추가 실패");
    }

    return reviewInfo;
}

export const reviewDelectService = async (data) => {
    const reviewInfo = await delectReview({
        reviewId: data.reviewId,
        memberId: data.memberId,
        storeId: data.storeId
    });

    if(!reviewInfo) {
        throw new Error("리뷰 삭제 실패");
    }

    return reviewInfo;

};
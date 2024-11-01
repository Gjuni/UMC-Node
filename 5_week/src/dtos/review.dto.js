export const bodyToReview = (body) => {
    return {    
        reviewId: body.reviewId,
        memberId: body.memberid,
        storeId: body.storeId,
        review: body.review
    };
};
export const bodyToMission = (body) => {
    return {
        storeId : body.storeId,
        reward : body.reward,
        createdAt : body.createdAt,
        updatedAt : body.updatedAt,
        dealine : body.dealine,
        status : body.status,
    };
}

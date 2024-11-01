import { addStoreResponsibility } from "../respositories/store.repository.js"


// Service에서 받은 데이터를 DTO를 통해 추가 시킴
export const storeUpdateService = async (data) => {
    const storeInfo = await addStoreResponsibility({
        storeName: data.storeName,
        storeAddress: data.storeAddress,
    });

    if (!storeInfo) {
        throw new Error("이미 존재하는 가게입니다.");
    }

    return storeInfo;
};

export const storeLocationService = async (data) => {
    const locationInfo = await locationResponsibility({
        storeId : data.storeId,
        storeAddress: data.storeAddress,
    });

    if(!locationInfo) {
        throw new Error("가게가 존재하지 않습니다.");
    }
}
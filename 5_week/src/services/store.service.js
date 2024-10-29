import {
    addStore,
    locationOfStore
} from "../respositories/store.repository.js"; // 올바른 경로로 import

console.log(addStore);

export const StoreUpdate = async (data) => {
    const storeinfo = await addStore({ store_name : data.store_name, store_address : data.store_address });
    return store;

    if(storeinfo === null) {
        throw new Error("이미 존재하는 가게입니다.");
    }
}

export const StoreLocation = async (data) => {
    const storeinfo = await locationOfStore({ address : data.address });

    if(storeinfo === null) {
        throw new Error("가게가 존재하지 않습니다.");
    }
    return storeinfo;
}
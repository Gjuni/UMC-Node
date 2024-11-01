// 데이터 파싱 또는 분류를 위한 DTO 파일

export const bodyToStore = (req, res) => {
    return {
        store_name : bodyToStore.store_name,
        store_address : bodyToStore.store_address
    }
};
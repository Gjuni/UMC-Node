export const bodyToStore = (req, res) => {
    return {
        store_name : bodyToStore.store_name,
        store_address : bodyToStore.store_address
    }
};
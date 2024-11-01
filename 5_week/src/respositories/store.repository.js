import { pool } from "../db.config.js";


// 가게 데이터 삽입
export const addStoreResponsibility = async (data) => {
    const conn = await pool.getConnection();

    try {
        const[confirm] = await conn.query(
            `SELECT EXISTS(SELECT 1 FROM store WHERE store_name = ?) as isExistStore;`,
            data.store_name
        );

        if(confirm[0].isExistStore) {
            return null;
        }

        const [result] = await conn.query(
            `INSERT INTO store (store_name, store_address) VALUES (?, ?);`,
            [
                data.store_name,
                data.store_address
            ]
        );

        return result.insertStore;
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    } finally {
        conn.release();
    }
};

// 주변 지역 식당 조회
export const locationResponsibility = async (data) => {
    const conn = await pool.getConnection();

    try {
        const [confirm] = await conn.query(
            `Select EXISTS(SELECT 1 FROM store WHERE store_address LIKE ?) as isExistStore;`, [`%${data.store_address}%`]
        );

        if(confirm[0].isExistStore) {
            const [result] = await conn.query(
                `SELECT * FROM store WHERE store_address LIKE ?;`, [`%${data.store_address}%`]
            );
            return result;
        } else {
            return null;
        }
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    } finally {
        conn.release();
    }
};
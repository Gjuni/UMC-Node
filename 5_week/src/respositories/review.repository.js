// 데이터를 DB에 추가
import { pool } from "../db.config.js"

export const addReviewRepository = async (data) => {
    const conn = await pool.getConnection(); // DB 연결

    try {
        const [result] = await conn.query(
            `INSERT INTO review (member_id, store_id, review) VALUES (?, ?, ?);`,
            [
                data.memberId,
                data.storeId,
                data.review
            ]
        );

        return result.insertId;
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    } finally {
        conn.release();
    }
};


export const reviewDelectRepository = async (data) => { 
    const conn = await pool.getConnection(); // DB 연결

    try {
        const [result] = await conn.query(
            `DELETE FROM review WHERE review_id = ? AND member_id = ? AND store_id = ?;`,
            [
                data.reviewId,
                data.memberId,
                data.storeId
            ]
        );

        return result.affectedRows > 0;
    } catch (err) {
        throw new Error(
            `리뷰 삭제 중 오류가 발생했습니다. 요청 파라미터를 확인해주세요. (${err.message})`
        );
    } finally {
        conn.release();
    }
}



export const reviewUpdateController = async (data) => {
    const conn = await pool.getConnection(); // DB 연결

    try {
        const [result] = await conn.query(
            `UPDATE review SET review = ? WHERE review_id = ? AND member_id = ? AND store_id = ?;`,
            [
                data.review,
                data.reviewId,
                data.memberId,
                data.storeId
            ]
        );

        return result.affectedRows > 0;
    } catch (err) {
        throw new Error(
            `리뷰 수정 중 오류가 발생했습니다. 요청 파라미터를 확인해주세요. (${err.message})`
        );
    } finally {
        conn.release();
    }
}
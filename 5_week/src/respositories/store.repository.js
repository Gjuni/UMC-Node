// pool을 어떤 파일에 있는 config.js에서 가져오겠다.
import { pool } from "../db.config.js";

// User 데이터 삽입
export const addStore = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [confirm] = await conn.query( // pool.query 결과에서 첫번째 요소를 confirm이라는 변수에 저장
      `SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail;`,
      data.email
    );

    if (confirm[0].isExistEmail) {
      return null;
    }

    const [result] = await conn.query(
      `INSERT INTO user (store_name, store_address) VALUES (?, ?);`,
      [
        data.store_name,
        data.store_address
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

// 사용자 정보 얻기
export const locationOfStore = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [confirm] = await conn.query(
        `SELECT EXISTS(SELECT 1 FROM store WHERE store_address LIKE ?) as isExistStore;`, [`%${address}%`]); // 데이터베이스 쿼리를 실행, 배열의 첫 요소를 user변수에 할당

    if (confirm[0].isExistStore) { // 쿼리가 비어있는지 확인
        const[result] = await conn.query(`SELECT * FROM store WHERE store_address LIKE ?;`, [`%${address}%`]);
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
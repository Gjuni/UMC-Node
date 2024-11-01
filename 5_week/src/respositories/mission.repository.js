// repository: 데이터베이스에 접근하여 데이터를 가져오거나 조작하는 함수를 모아둔 파일

import { pool } from "../db.config.js";

export const addMissionRepository = async (data) => {
    const conn = await pool.getConnection();

    try {
        const[result] = await conn.query(
            `INSERT INTO mission (store_Id , mission_Id, mission_point, mission_start, mission_status) VALUES (?, ?, ?, ?, ?);`,
            [
                data.storeId,
                data.missionId,
                data.missionPoint,
                data.missionStart,
                data.missionStatus,
            ]
        );
        return result;
    } catch (err) {
        throw new Error(
            `미션 추가 중 오류가 발생했습니다. 요청 파라미터를 확인해주세요. (${err.message})`
        );
    } finally { 
        conn.release();
    }
};


// 미션이 진행 중이면 추가하지 말고 미션을 시작하지 않았다면 추가하는 함수
export const addSubMissionRepository = async (data) => {
    const conn = await pool.getConnection();

    try {
        const[missionStatus] = await conn.query(
            `SELECT mission_status FROM mission WHERE store_Id = ? AND mission_Id = ?;`,
            [data.missionId]
        );

        if(missionStatus.length > 0 && missionStatus[0].mission_status === "진행중") {
            throw new Error("미션을 시작하지 않았습니다.");
        }

        const[result] = await conn.query(
            `INSERT INTO sub_mission (store_Id, mission_Id, mission_content, mission_status) VALUES (?, ?, ?, ?);`,
            [
                data.storeId,
                data.missionId,
                data.missionContent,
                data.missionStatus,
            ]
        );
        return result;
    } catch (err) {
        throw new Error(
            `서브 미션 추가 중 오류가 발생했습니다. 요청 파라미터를 확인해주세요. (${err.message})`
        );
    } finally {
        conn.release();
    }
}
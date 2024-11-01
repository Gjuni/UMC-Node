import { addMissionRepository, addSubMissionRepository } from "../respositories/mission.repository.js";

export const addMissionService = async (data) => {
    const mission = await addMissionRepository({
        storeId : data.storeId,
        missionId : data.missionId,
        missionName: data.missionName,
        missionContent: data.missionContent,
        missionPoint: data.missionPoint,
        missionStart : data.missionStart,
        missionEnd : data.missionEnd,
        missionStatus : data.missionStatus,
    });

    if (!mission) {
        throw new Error("미션 추가 실패");
    }

    return mission;
};

export const addSubMissionService = async (data) => {
    const subMission = await addSubMissionRepository({
        storeId : data.storeId,
        missionId : data.missionId,
        missionContent: data.missionContent,
        missionStatus : data.missionStatus,
    });
};
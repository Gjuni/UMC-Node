import { StatusCodes } from "http-status-codes";
import { bodyToMission } from "../dtos/mission.dto.js";
import { addMissionService, addSubMissionService } from "../services/mission.service.js";


export const handleMissionUpdateIndex = async (req, res, next) => {
    console.log("mission update 요청이 들어왔습니다.");
    console.log("body:", req.body);

    const mission = await addMissionService(bodyToMission(req.body));
    res.status(StatusCodes.OK).json({ result: mission });
};

export const handleMissionAddIndex = async (req, res, next) => {
    console.log("미션 추가 요청이 들어왔습니다.");
    console.log("body:", req.body);

    const subMission = await addSubMissionService(bodyToMission(req.body));
    res.status(StatusCodes.OK).json({ result: subMission });
}
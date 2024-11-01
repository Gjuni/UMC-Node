import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js"; // 이게 DTO
import { userSignUp } from "../services/user.service.js"

export const handleUserSignUp = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다.");
    console.log("body:", req.body); // 값이 들어왔나 확인용

    const user = await userSignUp(bodyToUser(req,res));
    res.status(StatusCodes.OK).json({result : user });
};
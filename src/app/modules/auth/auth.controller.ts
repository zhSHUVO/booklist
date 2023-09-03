import { Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../../config";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const signUp = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.signUp(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Signup successful",
        data: result,
    });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
    const { ...signInData } = req.body;
    const result = await AuthService.signIn(signInData);

    const { refreshToken, ...others } = result;

    const cookieOptions = {
        secure: config.env === "production",
        httpOnly: true,
    };

    res.cookie("refreshToken", refreshToken, cookieOptions);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User loggedin successfully !",
        data: others,
    });
});

export const AuthController = {
    signUp,
    signIn,
};

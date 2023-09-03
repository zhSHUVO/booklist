import { Request, Response } from "express";
import httpStatus from "http-status";
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

export const AuthController = {
    signUp,
};

import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { ProfileService } from "./profile.service";

const getProfile = catchAsync(async (req: Request, res: Response) => {
    const user = req.user;
    const result = await ProfileService.getProfile(user);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User Retrieved successfully",
        data: result,
    });
});
export const ProfileController = {
    getProfile,
};

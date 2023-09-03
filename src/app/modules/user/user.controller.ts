import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All users retrieved successfully",
        data: result,
    });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.getSingleUser(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User info retrieved successfully",
        data: result,
    });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.updateUser(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User info updated successfully",
        data: result,
    });
});

export const UserController = {
    getAllUsers,
    getSingleUser,updateUser
};

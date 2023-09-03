import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.service";

const createCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.createCategory(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Category created successful",
        data: result,
    });
});

export const CategoryController = {
    createCategory,
};

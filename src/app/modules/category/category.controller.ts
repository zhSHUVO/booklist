import { Category } from "@prisma/client";
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

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.getAllCategory();
    sendResponse<Category[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All categories retrieved successfully",
        data: result,
    });
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CategoryService.getSingleCategory(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `${result?.title} category book retrieved successfully`,
        data: result,
    });
});

export const CategoryController = {
    createCategory,
    getAllCategory,
    getSingleCategory,
};

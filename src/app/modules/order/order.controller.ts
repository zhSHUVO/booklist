import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const user = req.user;
    const result = await OrderService.createOrder(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order created successfully",
        data: result,
    });
});

const getOrder = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.user;

    const result = await OrderService.getOrder(id, user);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order retrieved by id successfully",
        data:
            result === null
                ? "You aren't authorized to see others order"
                : result,
    });
});

export const OrderController = {
    createOrder,
    getOrder,
};

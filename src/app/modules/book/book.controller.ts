import { Book } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchasync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { BookFilterAbleFileds } from "./book.constant";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.createBook(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book created successfully",
        data: result,
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, BookFilterAbleFileds);

    const paginationOptions = pick(req.query, paginationFields);
    const result = await BookService.getAllBooks(filters, paginationOptions);
    sendResponse<Book[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookService.getSingleBook(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result,
    });
});

const getBooksByCategoryId = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const paginationOptions = pick(req.query, paginationFields);
    const result = await BookService.getBooksByCategoryId(
        id,
        paginationOptions
    );
    sendResponse<Book[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books with associated category data fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});

export const BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    getBooksByCategoryId,
};

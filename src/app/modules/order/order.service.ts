import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import { prisma } from "../../../shared/prisma";

const createOrder = async (user: any, payload: any) => {
    const { id, role } = user;

    const isExist = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if (role !== "customer") {
        throw new ApiError(httpStatus.BAD_REQUEST, "Only customer can order");
    }
    const { orderedBooks } = payload;

    const result = await prisma.order.create({
        data: {
            userId: id,
            orderedBooks,
        },
    });
    return result;
};

const getOrder = async (orderId: string, user: any) => {
    const { role, id } = user;

    const isExist = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if (role === "customer") {
        const result = await prisma.order.findUnique({
            where: {
                id: orderId,
                userId: id,
            },
        });
        return result;
    }
    if (role === "admin") {
        const result = await prisma.order.findUnique({
            where: {
                id: orderId,
            },
        });
        return result;
    }
};

export const OrderService = {
    createOrder,
    getOrder,
};

import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import { prisma } from "../../../shared/prisma";

const getProfile = async (user: any | null) => {
    const { id } = user;
    const isExist = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const result = await prisma.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });
    return result;
};
export const ProfileService = {
    getProfile,
};

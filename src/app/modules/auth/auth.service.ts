import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import { prisma } from "../../../shared/prisma";

const signUp = async (payload: User) => {
    const isExist = await prisma.user.findFirst({
        where: {
            email: payload.email,
        },
    });
    if (isExist) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already in use!");
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const result = await prisma.user.create({
        data: {
            ...payload,
            password: hashedPassword,
        },
    });
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Something went wrong");
    }

    const { password, ...userWithoutPassword } = result;

    return userWithoutPassword;
};

export const AuthService = {
    signUp,
};

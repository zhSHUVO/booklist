import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/Apierror";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { prisma } from "../../../shared/prisma";
import { ILoginUser, ILoginUserResponse } from "./auth.interface";

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

const signIn = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
    const { email, password } = payload;

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Incorrect password");
    }

    const accessToken = jwtHelpers.createToken(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        config.jwt.secret as Secret,
        config.jwt.expires_in as string
    );
    const refreshToken = jwtHelpers.createToken(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        config.jwt.refresh_secret as Secret,
        config.jwt.refresh_expires_in as string
    );

    return {
        accessToken,
        refreshToken,
    };
};

export const AuthService = {
    signUp,
    signIn,
};

import { Category } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createCategory = async (payload: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data: payload,
    });
    return result;
};

const getAllCategory = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany();
    return result;
};

export const CategoryService = {
    createCategory,
    getAllCategory,
};
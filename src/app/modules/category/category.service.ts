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

const getSingleCategory = async (id: string) => {
    const Category = await prisma.category.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
    return Category;
};

export const CategoryService = {
    createCategory,
    getAllCategory,
    getSingleCategory,
};

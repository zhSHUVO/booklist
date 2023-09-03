import { prisma } from "../../../shared/prisma";

const getAllUsers = async () => {
    const users = await prisma.user.findMany();

    const usersWithoutPassword = users.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });

    return usersWithoutPassword;
};

export const UserService = {
    getAllUsers,
};

import { UserRole } from "@prisma/client";
import { z } from "zod";

const signUp = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
        }),
        email: z.string({
            required_error: "Email is required",
        }),
        password: z.string({
            required_error: "Password is required",
        }),
        contactNo: z.string({
            required_error: "Contact number is required",
        }),
        role: z.enum([...Object.values(UserRole)] as [string, ...string[]], {
            required_error: "Role is required",
        }),
        address: z.string({
            required_error: "Address is required",
        }),
        profileImg: z.string({
            required_error: "Image url is required",
        }),
    }),
});

export const AuthValidation = {
    signUp,
};

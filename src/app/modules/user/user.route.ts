import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = express.Router();

router.route("/").get(auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers);

router
    .route("/:id")
    .get(auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser)
    .patch(auth(ENUM_USER_ROLE.ADMIN), UserController.updateUser)
    .delete(auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

export const UserRoutes = router;

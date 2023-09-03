import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { CategoryController } from "./category.controller";

const router = express.Router();

router
    .route("/create-category")
    .post(auth(ENUM_USER_ROLE.ADMIN), CategoryController.createCategory);

router
    .route("/")
    .get(auth(ENUM_USER_ROLE.ADMIN), CategoryController.getAllCategory);

export const CategoryRoutes = router;

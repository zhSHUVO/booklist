import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

router
    .route("/create-category")
    .post(
        auth(ENUM_USER_ROLE.ADMIN),
        validateRequest(CategoryValidation.create),
        CategoryController.createCategory
    );

router
    .route("/")
    .get(auth(ENUM_USER_ROLE.ADMIN), CategoryController.getAllCategory);

router
    .route("/:id")
    .get(auth(ENUM_USER_ROLE.ADMIN), CategoryController.getSingleCategory)
    .patch(
        auth(ENUM_USER_ROLE.ADMIN),
        validateRequest(CategoryValidation.update),
        CategoryController.updateCategory
    );

export const CategoryRoutes = router;

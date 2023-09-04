import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { BookController } from "./book.controller";
import { BookValidation } from "./book.validation";

const router = express.Router();

router
    .route("/create-book")
    .post(
        auth(ENUM_USER_ROLE.ADMIN),
        validateRequest(BookValidation.create),
        BookController.createBook
    );

router.route("/").get(BookController.getAllBooks);

router
    .route("/:id")
    .get(BookController.getSingleBook)
    .patch(
        auth(ENUM_USER_ROLE.ADMIN),
        validateRequest(BookValidation.update),
        BookController.updateBook
    )
    .delete(auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

router.route("/:id/category").get(BookController.getBooksByCategoryId);

export const BookRoutes = router;

import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { OrderController } from "./order.controller";

const router = express.Router();

router
    .route("/create-order")
    .post(auth(ENUM_USER_ROLE.CUSTOMER), OrderController.createOrder);

router
    .route("/:id")
    .get(
        auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
        OrderController.getOrder
    );

router
    .route("/")
    .get(
        auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
        OrderController.getAllOrders
    );

export const OrderRoutes = router;

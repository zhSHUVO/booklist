import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.route("/").get(UserController.getAllUsers);

router.route("/:id").get(UserController.getSingleUser);

export const UserRoutes = router;

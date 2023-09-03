import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.route("/").get(UserController.getAllUsers);

export const UserRoutes = router;

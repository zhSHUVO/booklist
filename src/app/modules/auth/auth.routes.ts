import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router
    .route("/signup")
    .post(validateRequest(AuthValidation.signUp), AuthController.signUp);

export const AuthRoutes = router;

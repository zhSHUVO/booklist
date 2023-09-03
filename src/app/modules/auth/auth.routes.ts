import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router
    .route("/signup")
    .post(validateRequest(AuthValidation.signUp), AuthController.signUp);

router
    .route("/signin")
    .post(validateRequest(AuthValidation.signIn), AuthController.signIn);

export const AuthRoutes = router;

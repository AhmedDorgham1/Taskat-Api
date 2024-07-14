import { loginSchema, signupSchema } from "./user.validations.js";
import { login, signup } from "./user.controllers.js";
import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";

const userRouter = Router();

userRouter.post("/login", validate(loginSchema), login);
userRouter.post("/signup", validate(signupSchema), signup);

export default userRouter;

import express from "express";
import { getMe, login, register } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const usersRouter = express.Router();

usersRouter.post("/login", login);

usersRouter.post("/register", register);

usersRouter.get("/me", auth, getMe)

export default usersRouter;
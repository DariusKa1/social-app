import express from "express"
import { createPost, deletePost, getPosts } from "../controllers/postsController.js"
import { auth } from "../middlewares/auth.js"

const postsRouter = express.Router()

postsRouter.get("/", getPosts).post("/", auth, createPost);
postsRouter.delete("/:id", auth, deletePost);

export default postsRouter
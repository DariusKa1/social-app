import express from "express"
import { createPost, deletePost, getPosts } from "../controllers/postsController.js"

const postsRouter = express.Router()

postsRouter.get("/", getPosts).post("/", createPost)
postsRouter.delete("/:id", deletePost)

export default postsRouter
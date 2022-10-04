import express from "express"
import { createPost, getPosts } from "../controllers/postsController.js"

const postsRouter = express.Router()

postsRouter.get("/", getPosts).post("/", createPost)

export default postsRouter
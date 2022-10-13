import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";
import postsRouter from "./routes/postsRoutes.js";
import usersRouter from "./routes/userRoutes.js";

env.config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true, limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }));

app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/users", usersRouter);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Connected to mongoDB\nServer started on port ${process.env.PORT}`
      )
    )
  )
  .catch((err) => console.log(err.message));

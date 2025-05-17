import express from "express";
import cors from "cors";
const app = express();

import bookRouter from "./routes/books.routes.js";

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/books", bookRouter);

export default app;

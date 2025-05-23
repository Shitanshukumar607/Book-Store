import express from "express";
import cors from "cors";
const app = express();

import bookRouter from "./routes/books.routes.js";
import orderRouter from "./routes/orders.routes.js";
import userRouter from "./routes/users.routes.js";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/books", bookRouter);
app.use("/api/orders", orderRouter);
app.use("/api/auth", userRouter);

export default app;

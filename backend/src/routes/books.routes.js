import { Router } from "express";
import {
  addABook,
  getAllBooks,
  getBookById,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/").get(getAllBooks);

router.route("/addBook").post(addABook);

router.route("/:id").get(getBookById);

export default router;

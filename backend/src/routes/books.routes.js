import { Router } from "express";
import {
  addABook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller.js";
import verifyAdminToken from "../middlewares/verifyToken.js";

// GET    /api/books        → getAllBooks
// POST   /api/books        → addABook
// GET    /api/books/:id    → getBookById
// PUT    /api/books/:id    → updateBookById
// DELETE /api/books/:id    → deleteBookById

const router = Router();

router.route("/").get(getAllBooks).post(verifyAdminToken, addABook);

router
  .route("/:id")
  .get(getBookById)
  .put(verifyAdminToken, updateBookById)
  .delete(verifyAdminToken, deleteBookById);

export default router;

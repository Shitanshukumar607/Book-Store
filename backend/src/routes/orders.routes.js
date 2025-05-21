import { Router } from "express";
import { createAOrder } from "../controllers/order.controller.js";
const router = Router();

router.route("/").post(createAOrder);

export default router;

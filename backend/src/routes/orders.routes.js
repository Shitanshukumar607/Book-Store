import { Router } from "express";
import { createAOrder, getOrderByEmail } from "../controllers/order.controller.js";
const router = Router();

router.route("/").post(createAOrder);

router.route("/email/:email").get(getOrderByEmail);

export default router;

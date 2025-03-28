import express from "express";
import { createOrder, verifyPayment } from "../controllers/order";

const router = express.Router();

router.post("/create", createOrder);
router.post("/verify/:orderId/:paymentId", verifyPayment);

export default router;

import { Request, Response } from "express";
import { createOrderService, verifyPaymentService } from "../services/order";

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { amount } = req.body;
    if (!amount) {
      res.status(400).json({ success: false, message: "Amount is required" });
      return;
    }
    
    const result = await createOrderService(amount);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error("❌ Error Creating Order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const verifyPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, paymentId } = req.params;
    const { signature } = req.body;

    if (!signature) {
      res.status(400).json({ success: false, message: "Signature is required" });
      return;
    }

    const result = await verifyPaymentService(orderId, paymentId, signature);
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error Verifying Payment:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

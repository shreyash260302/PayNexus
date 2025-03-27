import { PrismaClient } from "@prisma/client";
import { razorpayInstance } from "../config/razorpay.config";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const createOrderService = async (amount: number) => {
  const order = await razorpayInstance.orders.create({
    amount: amount * 100, 
    currency: "INR",
    payment_capture: true,
  });

  const savedOrder = await prisma.order.create({
    data: {
      amount,
      currency: "INR",
      razorpayOrderId: order.id,
      status: "PENDING",
    },
  });

  return { order, savedOrder };
};

export const verifyPaymentService = async (orderId: string, paymentId: string, signature: string) => {
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!secret) {
    throw new Error("RAZORPAY_KEY_SECRET is not defined in .env");
  }

  console.log("🔹 Received Data:", { orderId, paymentId, signature });

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  if (expectedSignature !== signature) {
    console.error("❌ Signature Mismatch!");
    return { success: false, message: "Invalid Payment Signature" };
  }

  await prisma.order.update({
    where: { razorpayOrderId: orderId },
    data: { status: "PAID", paymentId },
  });

  console.log("✅ Payment Verified Successfully");
  return { success: true, message: "Payment Verified Successfully" };
};

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { razorpayInstance } from '../../config/razorpay.config';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

const prisma = new PrismaClient();

@Injectable()
export class OrderService {
  constructor(private configService: ConfigService) {}

  async createOrder(amount: number) {
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
  }

  async verifyPayment(orderId: string, paymentId: string, signature: string) {
    const secret = this.configService.get<string>('RAZORPAY_KEY_SECRET');

    if (!secret) {
        throw new Error('RAZORPAY_SECRET is not defined');
    }

    console.log("🔹 Received Data:", { orderId, paymentId, signature });

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${orderId}|${paymentId}`) 
      .digest('hex');

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
  }
}

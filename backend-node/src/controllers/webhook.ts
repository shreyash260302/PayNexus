import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handlePaymentWebhook = async (req: Request, res: Response) => {
  try {
    const event = req.body;

    if (event.event === "payment.captured") {
      await prisma.order.update({
        where: { razorpayOrderId: event.payload.payment.entity.order_id },
        data: { 
          status: "PAID", 
          paymentId: event.payload.payment.entity.id 
        },
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook handling error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
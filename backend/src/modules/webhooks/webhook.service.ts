import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class WebhookService {
  async handlePaymentWebhook(event: any) {
    if (event.event === "payment.captured") {
      await prisma.order.update({
        where: { razorpayOrderId: event.payload.payment.entity.order_id as string },
        data: { status: "PAID", paymentId: event.payload.payment.entity.id },
      });
    }
    return { success: true };
  }
}

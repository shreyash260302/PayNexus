const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handlePaymentWebhook = async (event: any) => {
  if (event.event === "payment.captured") {
    await prisma.order.update({
      where: { razorpayOrderId: event.payload.payment.entity.order_id },
      data: {
        status: "PAID",
        paymentId: event.payload.payment.entity.id,
      },
    });
  }
  return { success: true };
};

module.exports = { handlePaymentWebhook };

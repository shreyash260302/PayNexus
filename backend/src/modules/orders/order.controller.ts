import { Controller, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async createOrder(@Body() body: { amount: number }) {
    return this.orderService.createOrder(body.amount);
  }

  @Post('verify/:orderId/:paymentId')
  async verifyPayment(
    @Param('orderId') orderId: string,
    @Param('paymentId') paymentId: string,
    @Body() body: { signature: string }, 
  ) {
    return this.orderService.verifyPayment(orderId, paymentId, body.signature);
  }
  
}

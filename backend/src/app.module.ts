import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/order.module';
import { WebhooksModule } from './modules/webhooks/webhook.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    OrdersModule,
    WebhooksModule,
  ],
})
export class AppModule {}

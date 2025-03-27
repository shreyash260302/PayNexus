import { Controller, Post, Req, Res } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  
  @Post()
  async handleWebhook(@Req() req, @Res() res) {
    try {
      const event = req.body;
      console.log("Webhook Received:", event);

      await this.webhookService.handlePaymentWebhook(event);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Webhook Error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

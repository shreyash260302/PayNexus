import express from 'express';
import { handlePaymentWebhook } from '../controllers/webhook';

const router = express.Router();

router.post('/', handlePaymentWebhook);

export default router;

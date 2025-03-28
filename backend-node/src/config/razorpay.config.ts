import Razorpay from 'razorpay';
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (!keyId || !keySecret) {
  throw new Error("❌ Razorpay key_id or key_secret is missing. Please check your .env file.");
}
export const razorpayInstance = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

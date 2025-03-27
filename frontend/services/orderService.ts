import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export const createOrder = async (amount: number) => {
  const response = await axios.post(`${API_BASE_URL}/orders/create`, { amount });
  return response.data;
};

export const verifyPayment = async (paymentData: any) => {
  const response = await axios.post(
    `${API_BASE_URL}/orders/verify/${paymentData.orderId}/${paymentData.paymentId}`,
    { signature: paymentData.signature } // ✅ Send signature in body
  );
  return response.data;
};

  

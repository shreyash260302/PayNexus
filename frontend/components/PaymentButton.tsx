"use client";

import { useEffect, useState } from "react";
import { createOrder, verifyPayment } from "@/services/orderService";

interface PaymentButtonProps {
  amount: number;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ amount }) => {
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true); // Set state when script is loaded
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      alert("Razorpay is still loading. Please wait...");
      return;
    }
    setLoading(true);

    try {
      const order = await createOrder(amount);
      console.log("Order created:", order);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.data.savedOrder.amount,
        currency: "INR",
        name: "Home Service",
        description: "Payment for your order",
        order_id: order.data.savedOrder.razorpayOrderId,
        handler: async function (response: any) {
          console.log("Payment Successful:", response);

          try {
            const verificationResponse = await verifyPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            if (verificationResponse.success) {
              console.log("✅ Payment Verified:", verificationResponse);
              window.location.href = "/success";
            } else {
              console.log("❌ Payment Verification Failed:", verificationResponse);
              window.location.href = "/failure";
            }
          } catch (error) {
            console.error("❌ Error Verifying Payment:", error);
            window.location.href = "/failure";
          }
        },

        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9876543210",
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      window.location.href = "/failure";
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-500 text-white px-6 py-3 rounded-md"
      disabled={loading}
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PaymentButton;

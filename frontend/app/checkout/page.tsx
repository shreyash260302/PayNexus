import PaymentButton from "@/components/PaymentButton";
import { formatCurrency } from "@/utils/formatCurrency";

const totalAmount = 1; // Dummy total

const CheckoutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="border p-4 mb-4">
        <p>Total Amount: {formatCurrency(totalAmount)}</p>
      </div>
      <PaymentButton amount={totalAmount} />
    </div>
  );
};

export default CheckoutPage;

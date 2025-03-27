import { formatCurrency } from "@/utils/formatCurrency";

// Simulate fetching cart items (replace this with actual API call)
async function getCartItems() {
  return [
    { id: 1, name: "Wooden Chair", price: 2500 },
    { id: 2, name: "Sofa Set", price: 12000 },
  ];
}

export default async function CartPage() {
  const cart = await getCartItems(); // Fetch cart data on server side

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-2">
            <p>{item.name}</p>
            <p>{formatCurrency(item.price)}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      <a href="/checkout">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-4">
          Proceed to Checkout
        </button>
      </a>
    </div>
  );
}

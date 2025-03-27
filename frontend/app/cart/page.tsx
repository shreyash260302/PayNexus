"use client";

import { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/utils/formatCurrency";

const dummyCart = [
  { id: 1, name: "Wooden Chair", price: 2500 },
  { id: 2, name: "Sofa Set", price: 12000 },
];

const CartPage = () => {
  const [cart] = useState(dummyCart);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-2">
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
      ))}
      <Link href="/checkout">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md mt-4">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default CartPage;

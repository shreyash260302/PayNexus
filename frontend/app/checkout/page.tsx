"use client";
import PaymentButton from "@/components/PaymentButton";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";
import {
  MinusIcon,
  PlusIcon,
  ChevronLeftIcon,
  PhoneIcon,
  PencilIcon,
  BellIcon,
  ShoppingCartIcon,
  PenIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "lucide-react";
import Link from "next/link";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 150;

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  // Dummy total amount
   const totalAmount = basePrice * quantity + 99 + 9;
    //  const totalAmount = 1;

  return (
    <div className="w-full max-w-9xl mx-auto bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="bg-white px-4 py-3 sticky top-0 z-10 flex justify-between items-center shadow-sm">
        <Link href="/" className="text-gray-800">
          <ChevronLeftIcon className="w-6 h-6" />
        </Link>
        <span className="font-medium">Cart</span>
        <div className="relative flex items-center gap-4">
          <BellIcon className="w-6 h-6 text-gray-700" />
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-1 right-0 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Product Details */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium">Ceiling Fan Installation</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Date & Time Picker */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <input
              type="datetime-local"
              className="flex-1 outline-none bg-transparent text-sm"
              defaultValue="2024-10-23T13:00"
            />
            <PenIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Address & Phone Section */}
        <div className="bg-white rounded-xl shadow-sm">
          {/* Phone Number */}
          <div className="flex items-center justify-between border-b pb-3 border-gray-200">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Your Phone Number</p>
                <p className="text-base font-medium text-gray-900">123456789</p>
              </div>
            </div>
            <PencilIcon className="w-4 h-4 text-gray-500 cursor-pointer" />
          </div>

          {/* Address */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">Your Address</p>
                <p className="text-base font-medium text-gray-900">
                  301, Akruti Avenue, Mumbai, 400076
                </p>
              </div>
            </div>
            <PencilIcon className="w-4 h-4 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Frequently Bought Together */}
        <div className="bg-white rounded-xl shadow-sm">
          <button className="flex items-center gap-2 px-4 mb-2 py-2 border border-blue-950 rounded-lg text-blue-950 text-sm font-medium hover:bg-gray-100 transition">
            <PlusCircleIcon className="w-5 h-5 text-blue-950" />
            Add another service
          </button>

          <h3 className="font-medium text-gray-800 mb-4">Frequently Added Together</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Switch replacement", "Switchboard repair", "Socket installation"].map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-2 text-center">
                <img
                  src={`https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/a/c/acgptozv04_base.jpg`}
                  alt={item}
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-gray-600">{item}</p>
                <p className="font-medium text-sm">₹99</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white rounded-xl shadow-sm space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Amount</span>
            <span>₹{basePrice * quantity}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Taxes And Fee</span>
            <span>₹9</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Visitation Fee</span>
            <span>₹99</span>
          </div>
          <div className="flex justify-between items-center font-medium pt-2 border-t">
            <span>Total Amount:</span>
            <span>{formatCurrency(totalAmount)}</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-xl shadow-sm space-y-4">
          <div className="flex gap-3">
            <input type="radio" name="payment" id="online" defaultChecked className="accent-blue-600" />
            <label htmlFor="online" className="text-sm">Online Payment</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" name="payment" id="cod" className="accent-blue-600" />
            <label htmlFor="cod" className="text-sm">Cash On Delivery</label>
          </div>
        </div>

        <div className="bg-white rounded-xl space-y-2">
          <h4 className="font-medium text-sm">Cancellation Policy</h4>
          <p className="text-xs text-gray-600">
            Free cancellation if done more than 3 hrs before the service or if a professional is not assigned
          </p>
          <Link href="#" className="text-orange-500 text-xs">
            Learn more
          </Link>
        </div>

        {/* Checkout Button */}
        <div>
          <PaymentButton amount={totalAmount} />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { BellIcon, ShoppingCartIcon, CheckCircle2Icon } from "lucide-react";

export default function Success() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white px-4 py-3 sticky top-0 z-10">
        <div className="flex justify-end gap-4">
          <BellIcon className="w-6 h-6 text-gray-700" />
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4 space-y-6 pt-20">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
          <CheckCircle2Icon className="w-8 h-8 text-blue-600" />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-medium text-gray-900">Thank You For Booking</h1>
          <p className="text-gray-600 text-sm mt-1">Your service has been booked successfully!</p>
        </div>

        <div className="w-full bg-white p-4 rounded-xl space-y-3 border border-gray-300">
          <div className="flex justify-between">
            <span className="text-gray-800">Ceiling Fan Installation</span>
            <span className="text-gray-800">₹150(paid)</span>
          </div>
          <div className="text-gray-600 text-sm">
            <p>23-Oct-2024 At 1pm-2pm</p>
            <p className="mt-1">301, Akruti Avenue, Hiranandani Gardens, Powai, Mumbai, 400076</p>
          </div>
        </div>

        <Link
          href="/"
          className="block w-full bg-blue-950 text-white text-center py-4 rounded-xl font-medium"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
  
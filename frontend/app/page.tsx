import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Store 🛍️</h1>
      <p className="text-gray-600 mb-4 text-lg">Find the best products at the best prices.</p>
      <Link href="/cart">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg shadow-lg transition duration-300">
          🛒 Go to Cart
        </button>
      </Link>
    </div>
  );
}

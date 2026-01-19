"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams(); // dynamic id from URL
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-50 flex justify-center">
      <div className="bg-white rounded-lg shadow-md max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover"
        />

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-indigo-600 font-bold text-2xl mb-4">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <button
            onClick={() => router.push("/products")}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

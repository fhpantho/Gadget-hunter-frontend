"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://gadgethunter.vercel.app/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500 text-lg">No products available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 bg-base-200">
      <h1 className="text-4xl font-bold mb-8 text-center font-display text-primary">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-bold">{product.name}</h2>
              <p className="text-base-content/70 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
              <p className="text-primary font-bold text-lg mt-2">
                ${product.price}
              </p>

              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/products/${product._id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

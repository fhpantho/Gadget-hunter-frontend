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
        const res = await fetch(
          `https://gadgethunter.vercel.app/products/${id}`,
        );
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

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-base-100">
        <p className="text-gray-500 text-lg mb-4">Product not found.</p>
        <button
          onClick={() => router.push("/products")}
          className="btn btn-primary"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 bg-base-100 flex justify-center">
      <div className="card lg:card-side bg-base-200 shadow-xl max-w-4xl w-full">
        <figure className="lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold font-display">
            {product.name}
          </h2>
          <div className="badge badge-secondary">{product.category}</div>
          <p className="py-4">{product.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <div className="card-actions">
              <button
                onClick={() => router.push("/products")}
                className="btn btn-outline"
              >
                Back
              </button>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

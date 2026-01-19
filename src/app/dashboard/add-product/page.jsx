"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

export default function AddProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.image ||
      !product.category
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to add product");
        return;
      }

      toast.success("Product added successfully!");
      setProduct({ name: "", description: "", price: "", image: "", category: "" });

      // Redirect to products page after 2s
      setTimeout(() => router.push("/products"), 2000);
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Product
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Wireless Headphones"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="High-quality headphones with noise cancellation"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="120"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Electronics"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

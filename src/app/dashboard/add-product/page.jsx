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
      const res = await fetch(`https://gadgethunter.vercel.app/products`, {
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
      setProduct({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });

      // Redirect to products page after 2s
      setTimeout(() => router.push("/products"), 2000);
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="bg-base-100 p-8 rounded-lg shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 font-display text-primary">
          Add New Product
        </h2>

        {/* Name */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Wireless Headphones"
          />
        </div>

        {/* Description */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="High-quality headphones with noise cancellation"
          />
        </div>

        {/* Price */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Price ($)</span>
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="120"
          />
        </div>

        {/* Image URL */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Category */}
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Electronics"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
}

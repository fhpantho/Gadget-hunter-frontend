"use client";

import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import TopProducts from "@/components/home/TopProducts";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://gadgethunter.vercel.app/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <section>
        <Banner />
        <Features />
        <TopProducts products={products} />
        <Categories />
        <Testimonials />
        <AboutUs />
        <CTA />
      </section>
    </div>
  );
}

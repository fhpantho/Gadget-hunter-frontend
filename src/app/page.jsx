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
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
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

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Discover the Latest Gadgets",
    description:
      "Explore cutting-edge technology and premium gadgets at the best prices.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Upgrade Your Tech Life",
    description:
      "Smartphones, laptops, wearables, and accessories — all in one place.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    title: "Hunt the Best Gadgets",
    description:
      "Gadget-Hunter helps you find the perfect tech that matches your lifestyle.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
];

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[80vh] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero h-[80vh]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay bg-opacity-70 bg-gray-900"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-display uppercase tracking-wider text-primary">
                    {slide.title}
                  </h1>
                  <p className="mb-5 text-gray-300 text-lg font-light">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link href="/products" className="btn btn-primary">
                      Explore Products
                    </Link>
                    <Link
                      href="/login"
                      className="btn btn-outline btn-secondary"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

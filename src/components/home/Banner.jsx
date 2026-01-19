"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Discover the Latest Gadgets",
    description:
      "Explore cutting-edge technology and premium gadgets at the best prices.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Upgrade Your Tech Life",
    description:
      "Smartphones, laptops, wearables, and accessories — all in one place.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    title: "Hunt the Best Gadgets",
    description:
      "Gadget-Hunter helps you find the perfect tech that matches your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
];

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[80vh] bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-4 text-gray-200 max-w-xl text-lg">
                  {slide.description}
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="/products"
                    className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Explore Products
                  </a>
                  <a
                    href="/login"
                    className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
                  >
                    Login
                  </a>
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

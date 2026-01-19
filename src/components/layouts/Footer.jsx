"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Gadget<span className="text-indigo-500">-Hunter</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Gadget-Hunter is a modern gadget e-commerce product catalog built
            with Next.js and Express.js. Discover the latest tech products,
            compare features, and manage gadgets with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-indigo-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-indigo-400 transition">
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-product"
                className="hover:text-indigo-400 transition"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Accessories</li>
            <li>Wearables</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@gadget-hunter.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Location: Bangladesh</li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-indigo-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Gadget-Hunter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

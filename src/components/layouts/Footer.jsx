"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-20">
      <aside>
        <span className="font-bold text-3xl font-display text-primary">
          Gadget<span className="text-secondary">-Hunter</span>
        </span>
        <p className="max-w-xs mt-4">
          Gadget-Hunter is a modern gadget e-commerce product catalog built with
          Next.js and Express.js. Discover the latest tech.
        </p>
        <p>© {new Date().getFullYear()} Gadget-Hunter. All rights reserved.</p>
      </aside>
      <nav>
        <header className="footer-title">Quick Links</header>
        <Link href="/" className="link link-hover hover:text-primary">
          Home
        </Link>
        <Link href="/products" className="link link-hover hover:text-primary">
          Products
        </Link>
        <Link href="/login" className="link link-hover hover:text-primary">
          Login
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Categories</header>
        <a className="link link-hover hover:text-primary">Smartphones</a>
        <a className="link link-hover hover:text-primary">Laptops</a>
        <a className="link link-hover hover:text-primary">Accessories</a>
        <a className="link link-hover hover:text-primary">Wearables</a>
      </nav>
      <nav>
        <header className="footer-title">Contact</header>
        <a className="link link-hover">support@gadget-hunter.com</a>
        <a className="link link-hover">+880 1234 567890</a>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="link link-hover text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="link link-hover text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

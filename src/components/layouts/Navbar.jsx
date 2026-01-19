"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hasAuth = document.cookie.includes("auth=true");
    setIsLoggedIn(hasAuth);
  }, []);

  const linkClass = (path) =>
    pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-600 hover:text-indigo-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
          Gadget- 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
  Hunter
</span>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/products" className={linkClass("/products")}>
              Products
            </Link>

            {isLoggedIn && (
              <Link
                href="/dashboard/add-product"
                className={linkClass("/dashboard/add-product")}
              >
                Add Product
              </Link>
            )}

            {!isLoggedIn ? (
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  document.cookie = "auth=; Max-Age=0; path=/";
                  window.location.href = "/login";
                }}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="/products" className="block text-gray-700">
            Products
          </Link>

          {isLoggedIn && (
            <Link href="/dashboard/add-product" className="block text-gray-700">
              Add Product
            </Link>
          )}

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="block text-center bg-indigo-600 text-white py-2 rounded-md"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                document.cookie = "auth=; Max-Age=0; path=/";
                window.location.href = "/login";
              }}
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

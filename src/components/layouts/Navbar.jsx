"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state from cookie
  useEffect(() => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    setIsLoggedIn(authCookie === "auth=true");
  }, []);

  // Logout function
  const handleLogout = () => {
    // Delete the cookie
    document.cookie = "auth=; Max-Age=0; path=/";

    // Update state immediately
    setIsLoggedIn(false);

    // Redirect to login page
    router.push("/login");
  };

  const linkClass = (path) =>
    pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-600 hover:text-indigo-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">Gadget-Hunter</div>

      <ul className="flex gap-6 items-center">
        <li>
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
        </li>

        {/* Show Add Product only if logged in */}
        {isLoggedIn && (
          <li>
            <Link
              href="/dashboard/add-product"
              className={linkClass("/dashboard/add-product")}
            >
              Add Product
            </Link>
          </li>
        )}

        {/* Login / Logout */}
        {!isLoggedIn ? (
          <li>
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-500 transition"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

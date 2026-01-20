"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔁 Re-check auth on every route change
  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className=" fixed top-0 z-50 w-full navbar bg-base-100/80 backdrop-blur-md border-b">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          Gadget <span className="text-secondary">Hunter</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link href="/dashboard/add-product">Add Product</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="bumblebee"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm12,1.41a1,1,0,0,0,.7-.29l.71-.71a1,1,0,0,0-1.41-1.41l-.71.71A1,1,0,0,0,17.64,8.46Zm1.87,8.08a1,1,0,0,0-.71.71l.71.71a1,1,0,0,0,1.41-1.41L19.51,16.54ZM20,12a1,1,0,0,0-1-1H18a1,1,0,0,0,0,2h1A1,1,0,0,0,20,12Zm-7,7a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,13,19ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,1a5,5,0,0,1,5,5,5,5,0,0,1-5,5,5,5,0,0,1-5-5A5,5,0,0,1,7,12,5,5,0,0,1,12,7Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {!isLoggedIn ? (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-error btn-outline btn-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

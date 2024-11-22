"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <nav className="bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="block py-2 px-3 text-white rounded md:bg-transparent "
          aria-current="page"
        >
          Home
        </Link>

        {isAuthenticated && (
          <Link
            href="/login"
            onClick={() => logout}
            className="block py-2 px-3 text-white rounded md:bg-transparent "
            aria-current="page"
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

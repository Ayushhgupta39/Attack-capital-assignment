"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl text-center">
      <h2 className="text-2xl font-bold mb-4">
        {error.message || "Failed to load post"}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Try again
      </button>
      <Link href="/" className="ml-4 text-blue-500 hover:text-blue-600">
        Return home
      </Link>
    </div>
  );
}

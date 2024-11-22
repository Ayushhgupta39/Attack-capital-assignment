"use client";

import { getPost } from "@/lib/server-api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: {
    email: string;
  };
  createdAt: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost: Post = await getPost(params.id);
      setPost(fetchedPost);
    };
    fetchPost();
  }, [params.id]);

  if (!post) {
    return <div className="text-center w-full m-4">Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:text-blue-600 mb-6 inline-block"
      >
        ← Back to previous page
      </button>

      <article className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 mb-8">
          <span className="mb-2 sm:mb-0">
            By {post.author?.email || "Anonymous"}
          </span>
          <time dateTime={post.createdAt} className="text-sm">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="prose max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}

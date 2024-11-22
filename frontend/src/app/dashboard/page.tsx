"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { api } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import { decodeUserIdFromToken } from "@/utils/decodeJWT";

export default function Page() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const token = localStorage.getItem("token");

  const user: any = decodeUserIdFromToken(token);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/posts", newPost);
      setNewPost({ title: "", content: "" });
    } catch (error) {
      console.log("Error while creating :", (error as Error).message);
      console.error("Failed to create post");
    }
  };

  useEffect(() => {
    // Fetch user's posts using filter api
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/posts?authorId=${user.id}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", (error as Error).message);
      }
    };

    fetchPosts();
  }, [isAuthenticated, router]);

  return (
    <div className="container mx-auto p-4">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Create a New Post
        </h2>
        <form onSubmit={handlePostSubmit} className="mb-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                placeholder="Post Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Post Content
              </label>
              <textarea
                id="content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                placeholder="Post Content"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Create Post
          </button>
        </form>
      </div>

      <h2 className="mb-4 text-xl font-bold text-gray-900">Your Posts</h2>

      {posts.length === 0 && <div>No Posts found.</div>}
      <div>
        {posts.map((post: any) => (
          <BlogCard
            _id={post._id}
            key={post._id}
            author={post.author.email}
            content={post.content}
            title={post.title}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

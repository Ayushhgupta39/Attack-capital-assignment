import { getPosts } from "@/lib/server-api";
import BlogCard from "./BlogCard";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: {
    email: string;
  };
  createdAt: string;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="h-screen px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Community Blog Posts
      </h1>

      <div className="text-center m-8">
        <a
          href="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Start Writing
        </a>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-3/4">
          {posts.length === 0 ? (
            <div className="text-center text-gray-500">
              No posts found. Be the first to write something!
            </div>
          ) : (
            <div className="flex flex-col w-full justify-center items-center gap-6 m-4">
              {posts.map((post: Post) => (
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
          )}
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import React from "react";

interface BlogCardProps {
  _id: string;
  author: string;
  date: string;
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  author,
  date,
  title,
  content,
}) => {
  return (
    <div className="w-full p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a>
        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-sm md:text-base font-normal text-gray-700 ">
        {content}
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
        <small className="text-sm font-medium text-gray-700 mb-2 md:mb-0">
          By {author}
        </small>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Link
          href={`/posts/${_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-2 md:mb-0"
        >
          Read more
        </Link>

        <span className="text-sm text-gray-500 ">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;

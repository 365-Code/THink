import Image from "next/image";
import React from "react";
import EditorPreview from "./tiptap/EditorPreview";
import "./tiptap/style.css";

const Blog = (blog: {
  thumbnail: string;
  category: Array<string>;
  title: string;
  description: string;
}) => {
  let clrs = [
    {
      border: "border-purple-500",
      bg: "hover:bg-purple-500",
    },
    {
      border: "border-cyan-500",
      bg: "hover:bg-cyan-500",
    },
    {
      border: "border-green-500",
      bg: "hover:bg-green-500",
    },
    {
      border: "border-rose-500",
      bg: "hover:bg-rose-500",
    },
  ];

  return (
    <div className="space-y-4 md:basis-3/5">
      <div className="space-y-2">
        <div
          className={`h-[300px] w-full ${
            !blog.thumbnail && "animate-pulse"
          } overflow-hidden rounded-lg bg-[#181818]`}
        >
          {blog.thumbnail && (
            <Image
              width={1000}
              height={200}
              src={blog.thumbnail}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        <ul className="flex flex-wrap gap-2 text-sm">
          {blog.category?.map((ctg, i) => (
            <li
              key={ctg}
              className={`select-none rounded-lg border px-2 py-1 ${
                clrs[i % 4].border
              } ${clrs[i % 4].bg}`}
            >
              {ctg}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-lg">{blog.title}</h2>

      {blog.description && <EditorPreview content={blog.description} />}
    </div>
  );
};

export default Blog;

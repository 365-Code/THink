import { splitWords } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard(blog: {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  datePost: string;
}) {
  return (
    <div className="flex w-full min-w-[250px] max-w-[350px] flex-1 flex-col space-y-2 sm:max-w-[320px]">
      <div className="h-[350px] w-full overflow-hidden rounded-lg">
        <Image
          width={400}
          height={400}
          src={blog.thumbnail}
          alt=""
          className="h-full w-full object-cover object-center transition-all hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h3 className="text-lg font-semibold">
          {blog.title.slice(0, 25) + "..."}
        </h3>
        <p className="whitespace-pre-line text-sm">
          {splitWords(blog.description, 32)}
        </p>
      </div>

      <hr className="w-full" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex w-2/5 gap-2">
          <i className="fi fi-sr-calendar" />
          <span className="whitespace-nowrap">{blog.datePost}</span>
        </div>
        <div className="flex w-2/5 gap-2">
          <i className="fi fi-sr-eye" />
          <span>Views</span>
        </div>
      </div>
      <div className="flex  items-center text-center">
        <Link href={`/blogs/${blog.id}`} className="unselected w-full">
          Read More
        </Link>
      </div>
    </div>
  );
}

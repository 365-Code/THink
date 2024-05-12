"use client";
import React from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const Blogs = (props: { blogs: any }) => {
  return (
    <main className="my-container-1 sm:display-blogs-sm display-blogs grid justify-items-center gap-4 sm:justify-items-start">
      {props.blogs
        ? props.blogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              thumbnail={blog.thumbnail}
              title={blog.title}
              description={blog.description}
              datePost={blog.datePost}
            />
          ))
        : [1, 2, 3].map((i) => <BlogCardSkeleton key={i} />)}
    </main>
  );
};

export default Blogs;

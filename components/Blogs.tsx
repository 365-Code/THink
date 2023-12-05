"use client";
import React from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const Blogs = (props: { blogs: any }) => {
  
  return (
    <main className="my-container-1">
      <div className="grid w-full grid-cols-1 justify-items-center gap-4 space-y-4 sm:grid-cols-2 sm:space-y-0 min-[1000px]:grid-cols-3">
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
      </div>
    </main>
  );
};

export default Blogs;

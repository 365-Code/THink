"use client";
import React from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

type Blog = {
  _id: string;
  title: string;
  description: string;
  datePost: string;
  postedBy: {
    profile: string;
    username: string;
  };
  thumbnail: string;
  categories: string[];
};

const Blogs = (props: { blogs: Blog[] }) => {
  return (
    <main className="my-container-1 display-blogs grid justify-center gap-4 sm:justify-start">
      {props.blogs
        ? props.blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        : [1, 2, 3].map((i) => <BlogCardSkeleton key={i} />)}
    </main>
  );
};

export default Blogs;

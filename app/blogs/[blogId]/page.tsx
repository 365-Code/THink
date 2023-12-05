"use client";
import Blog from "@/components/Blog";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import Comments from "@/components/Comments";

const Page = () => {
  const { blogId: bId } = useParams();
  const [blogData, setBlogData] = useState({
    thumbnail: "",
    title: "",
    description: "",
    categories: [],
    comments: [],
  });

  const fetchBlog = async () => {
    const response = await fetch(`/api/blogs/fetchBlog?bId=${bId}`);
    const res = await response.json();
    if (res.success) {
      setBlogData(res.blog);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [bId]);

  return (
    <main className="my-container-1 flex min-h-screen flex-col gap-4 md:flex-row">
      {blogData && (
        <>
          <Blog
            thumbnail={blogData.thumbnail}
            title={blogData.title}
            description={blogData.description}
            category={blogData.categories}
          />
          <Comments comments={blogData.comments} />
        </>
      )}
    </main>
  );
};

export default Page;

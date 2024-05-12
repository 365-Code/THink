"use client";
import Articles from "@/components/Articles";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Discover from "@/components/Discover";
import FetchAllBlogs from "@/components/FetchAllBlogs";
import { blogCards } from "@/lib";
import { setBlogs } from "@/utils/redux/features/blogSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState(Array<any>);
  const [articles, setArticles] = useState(Array<any>);

  const fetchAllBlogs = async () => {
    const response = await fetch("/api/blogs/fetchAllBlogs");
    const res = await response.json();
    if (res.success) {
      setAllBlogs(res.blogs);
      if (!articles.length) {
        setArticles(res.blogs);
      }
      dispatch(setBlogs(res.blogs));
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <main>
      <Discover setAllBlogs={setAllBlogs} />
      <Articles articles={articles.slice(0, 3)} />
      <FetchAllBlogs />
      <Contact />
    </main>
  );
}

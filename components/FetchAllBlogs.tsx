"use client";
import { setBlogs } from "@/utils/redux/features/blogSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Blogs from "./Blogs";

const FetchAllBlogs = () => {
  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState(Array<any>);

  const fetchAllBlogs = async () => {
    const response = await fetch("/api/blogs/fetchAllBlogs");
    const res = await response.json();
    if (res.success) {
      setAllBlogs(res.blogs);
      dispatch(setBlogs(res.blogs));
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);
  return (
    <div id="main-blogs">
      <Blogs blogs={allBlogs} />
    </div>
  );
};

export default FetchAllBlogs;

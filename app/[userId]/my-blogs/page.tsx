"use client";
import Blogs from "@/components/Blogs";
import SearchBar from "@/components/SearchBar";
import { blogCards } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const { userId: uId } = useParams();
  const authUser = useSelector((state: any) => state.authReducer.auth);

  const fetchMyBlogs = async () => {
    const response = await fetch(`/api/blogs/fetchMyBlogs?uId=${uId}`);
    const res = await response.json();
    if (res.success) {
      setMyBlogs(res.blogs);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, [uId]);


  return (
    <>
      {authUser.loggedIn ? (
        <>
          <SearchBar setAllBlogs={setMyBlogs} sectionName="myBlogs-blogs" />
          <div className="relative flex w-full justify-center py-4">
            <Link
              href={`/${authUser.user._id}/create-blog`}
              className="absolute z-[1] mx-auto rounded-lg border-none bg-blue-500 px-4 py-2 hover:bg-blue-600 sm:right-0 sm:mr-[5rem]"
            >
              Create Post
            </Link>
          </div>
          {myBlogs.length > 0 ? (
            <div id="myBlogs-blogs">
              <Blogs blogs={myBlogs} />
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
              <Image
                width={300}
                height={100}
                className="rounded-lg"
                src={
                  // "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=740&t=st=1701196893~exp=1701197493~hmac=a125b6e7aa5744de73b6b9f04fab40710d06348c7c590d45e0a6a1782266b842"
                  '/noblog.svg'
                }
                alt=""
              />
              <h1 className="text-2xl sm:text-3xl">No Blogs Posted Yet</h1>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <Image
            width={300}
            height={100}
            className="rounded-lg"
            src={
              "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=740&t=st=1701071330~exp=1701071930~hmac=450c43109a919a76b88fa275fbd0359a43c87662d1752b524130c0ba88276b43"
            }
            alt=""
          />
          <h1 className="text-2xl sm:text-3xl">Login to Access this page</h1>
          <Link
            href={"/auth/login"}
            className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
          >
            Take Me
          </Link>
        </div>
      )}
      
    </>
  );
};

export default Page;

import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const TestComponent = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={"/blogs/" + blog._id}
      className="flex min-w-[350px] max-w-[400px] flex-col gap-2 overflow-hidden rounded-xl"
    >
      <div className="h-[230px] w-full">
        <Image
          width={500}
          height={500}
          src={blog.thumbnail || ""}
          alt={blog._id}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h2 className="text-2xl">{blog.title}</h2>
      <div
        className="hyphens-auto text-base"
        dangerouslySetInnerHTML={{ __html: blog.description?.slice(0, 150) }}
      />
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
          <Image
            width={100}
            height={100}
            src={blog.postedBy.profile}
            alt={blog.postedBy.username}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="leading-4">
          <p>{blog.postedBy.username}</p>
          <p>{blog.datePost}</p>
        </div>
      </div>
    </Link>
  );
};

export default TestComponent;

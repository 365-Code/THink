// import { splitWords } from "@/lib";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// type Blog = {
//   _id: string;
//   title: string;
//   description: string;
//   datePost: string;
//   postedBy: {
//     profile: string;
//     username: string;
//   };
//   thumbnail: string;
//   categories: string[];
// };

// export default function BlogCard({ blog }: { blog: Blog }) {
//   return (
//     <Link
//       href={`/blogs/${blog._id}`}
//       className="flex w-full min-w-[300px] max-w-[400px] flex-1 flex-col space-y-2 sm:max-w-[320px]"
//     >
//       <div className="h-[300px] w-full overflow-hidden rounded-lg">
//         <Image
//           width={400}
//           height={400}
//           src={blog.thumbnail}
//           alt=""
//           className="h-full w-full object-cover object-center transition-all hover:scale-105"
//         />
//       </div>
//       <div className="flex flex-1 flex-col ">
//         <h2 className="text-lg font-semibold">
//           {blog.title.slice(0, 25) + "..."}
//         </h2>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: splitWords(blog.description, 32) as string,
//           }}
//           className="hyphens-auto text-sm"
//         >
//           {/* {splitWords(blog.description, 32)} */}
//         </p>
//       </div>

//       <hr className="w-full" />
//       <div className="flex items-center justify-between gap-4">
//         <div className="flex w-2/5 gap-2">
//           <i className="fi fi-sr-calendar" />
//           <span className="whitespace-nowrap">{blog.datePost}</span>
//         </div>
//         <div className="flex w-2/5 gap-2">
//           <i className="fi fi-sr-eye" />
//           <span>Views</span>
//         </div>
//       </div>
//     </Link>
//   );
// }

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

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={"/blogs/" + blog._id}
      className="flex max-w-[400px] w-full flex-col gap-2 rounded-xl"
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

export default BlogCard;

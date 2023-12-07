"use client";
import { avatar } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const authUser = useSelector((state: any) => state.authReducer.auth);
  return (
    // <div className='flex-1 flex flex-col gap-3 justify-center items-center '>
    //     {/* <h1 className='text-xl'>Page Under Construction</h1> */}
    //     <h1 className='text-xl'>{authUser.user.username}</h1>
    //     <h2>{authUser.user.email}</h2>
    //     <Link href={'/'} className='py-2 px-3 rounded-lg bg-[#282828] hover:bg-[#181818] transition-all'>Back to Home</Link>
    // </div>
    <div className="flex h-screen w-screen items-center justify-center bg-[#121212]">
      <div className="flex min-h-[80%] max-w-[760px] w-4/5 flex-col rounded-lg bg-[#181818] sm:flex-row">
        <div className="relative p-4 sm:w-[230px] sm:bg-[#222222]">
          <div className="absolute left-1/2 -top-[60%] mx-auto h-[130px] w-[130px] max-w-full -translate-x-1/2 overflow-hidden rounded-full sm:static sm:h-[200px] sm:w-auto sm:translate-x-0 sm:rounded-lg">
            <Image
              src={avatar}
              width={300}
              height={300}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mx-auto h-[50px] w-[130px] max-w-full overflow-hidden rounded-lg sm:h-[200px] sm:w-auto"></div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="w-full space-y-1 text-white">
            <p className="text-sm">username</p>
            <input
              type="text"
              className="w-full rounded-lg border-none bg-[#222222] p-2 text-sm outline-none"
            />
          </div>
          <div className="w-full space-y-1 text-white">
            <p className="text-sm">email</p>
            <input
              type="text"
              className="w-full rounded-lg border-none bg-[#222222] p-2 text-sm outline-none"
            />
          </div>
          <div className="w-full space-y-1 text-white">
            <p className="text-sm">profession</p>
            <input
              type="text"
              className="w-full rounded-lg border-none bg-[#222222] p-2 text-sm outline-none"
            />
          </div>

          <p className="text-sm text-white">description</p>
          <textarea className="h-full w-full flex-1 resize-none rounded-lg border-none bg-[#222222] p-2 text-sm text-white outline-none">
            {" "}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default Page;

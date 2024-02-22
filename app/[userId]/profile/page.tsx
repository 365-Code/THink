"use client";
import { avatar } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
  const [edit, setEdit] = useState(false);
  const authUser = useSelector((state: any) => state.authReducer.auth);
  const [user, setUser] = useState({
    username: "",
    description: "",
    profile: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(authUser.user);
  }, [authUser]);

  const handleSave = async () => {
    try {
      const response = await fetch('/api/users/updateUser', {
        method: 'PUT',
        headers:{
          'ContentType': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const res = await response.json();
      if(res.success){
        toast.success('Updated Successfully')
      } else{
        toast.error(res.msg)
      }
    } catch (error) {
      return error
    }
  }

  return (
    // <div className='flex-1 flex flex-col gap-3 justify-center items-center '>
    //     {/* <h1 className='text-xl'>Page Under Construction</h1> */}
    //     <h1 className='text-xl'>{authUser.user.username}</h1>
    //     <h2>{authUser.user.email}</h2>
    //     <Link href={'/'} className='py-2 px-3 rounded-lg bg-[#282828] hover:bg-[#181818] transition-all'>Back to Home</Link>
    // </div>
    <div className="mx-auto flex w-[800px] max-w-full flex-col gap-4 bg-[#28282] p-8 sm:flex-row">
      <div className="flex flex-col gap-4 items-center">
        <label htmlFor="avatar">
        <img
          // src="/logo.png"
          src={user.profile || '/logo.png'}
          alt=""
          className="h-[250px] w-[250px] rounded-lg object-contain object-center"
          />
          </label>
        <input type="file" id="avatar" className="hidden" value={""} />
        <div className="flex w-full flex-1 justify-center">
          {!edit ? (
            <button
              onClick={() => setEdit(true)}
              className="w-[200px] bg-slate-500 p-4 py-2 text-lg hover:bg-slate-600"
            >
              Edit
            </button>
          ) : (
            <>
              <button onClick={handleSave} className="max-w-[200px] flex-1 bg-blue-500 p-4 py-2 text-lg hover:bg-blue-600">
                Save
              </button>
              <button
                onClick={() => setEdit(false)}
                className="max-w-[200px] flex-1 bg-slate-500 p-4 py-2 text-lg hover:bg-slate-600"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="space-y-1">
          <h2 className="">Username</h2>
          <input
            disabled={!edit}
            onChange={handleChange}
            type="text"
            name="username"
            value={user?.username}
            className="focus-within:border-b-blue-500 w-full border-b p-3 disabled:cursor-not-allowed"
          />
        </div>
        <div className="space-y-1">
          <h2 className="">Email</h2>
          <input
            disabled={true}
            onChange={handleChange}
            type="email"
            value={authUser?.user?.email}
            className="focus-within:border-b-blue-500 w-full border-b p-3 disabled:cursor-not-allowed"
          />
        </div>
        <div className="flex flex-1 flex-col space-y-1">
          <h2 className="">Description</h2>
          <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>)=> setUser({...user, description: e.target.value})}
            disabled={!edit}
            name="description"
            value={user?.description || ""}
            className="focus-within:border-b-blue-500 no-scrollbar w-full flex-1 resize-none border-b p-3 disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

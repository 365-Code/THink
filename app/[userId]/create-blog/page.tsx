"use client";
import { clrs, clrsLength } from "@/lib";
import { addBlog } from "@/utils/redux/features/blogSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
  const [ctg, setCtg] = useState(["Technical"]);
  const [blogData, setBlogData] = useState({
    thumbnail:
      "https://img.freepik.com/free-photo/view-robot-human-businessperson_23-2150911961.jpg",
    title: "",
    description: "",
  });
  const authUser = useSelector((state: any) => state.authReducer.auth);

  useEffect(() => {
    if (!authUser.user) {
      nav.push("/");
    } 
  }, [authUser.user]);

  // const [sCtg, setSctg] = useState('');
  const nav = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBlogData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function removeCtg(category: string) {
    if (ctg.length > 1) {
      setCtg((prevCtg) => {
        return prevCtg.filter((c) => c != category);
      });
    }
  }

  function addCtg(category: string) {
    const ind = ctg.findIndex((v) => {
      return v == category;
    });
    if (ind != -1) {
      return;
    }
    setCtg((prevCtg) => [...prevCtg, category]);
  }

  const [image, setImage] = useState<any>();
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET || "");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME || "");
    try{

      const result = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME || ""}/image/upload`, {
        method: "post",
        body: data,
      })
      
      const res = await result.json()
      setUrl(res.secure_url)
    } catch(error){
      console.log(error);
      return error;
    }
  };

  const addBlogHandler = async () => {
    const postData = {
      ...blogData,
      thumbnail: url,
      categories: ctg,
      postedBy: authUser.user._id,
    };
    try {
      const response = await fetch("/api/blogs/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const res = await response.json();
      if (res.success) {
        nav.push(`/blogs/${res.blog._id}`);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      return error;
    }
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      setImage( e.target.files[0])
      uploadImage()
    }

  }

  return (
    <>
      {authUser.loggedIn ? (
        <main className="my-container-1 flex h-screen flex-col space-y-4">
          <label htmlFor="thumbnail" className="cursor-pointer">
          <div
            id="image"
            className="flex h-[8rem] cursor-pointer items-center justify-center overflow-hidden rounded-xl hover:bg-[#141312]"
          >
            <Image
              width={1000}
              height={100}
              src={url || blogData.thumbnail}
              alt=""
              className="h-full w-full object-cover object-center"
              />
          </div>
          </label>
            <input id="thumbnail" type="file" className="hidden" value={""} onChange={handleImage} />

          <div id="title" className=" relative flex flex-col gap-2 sm:flex-row">
            <div className="relative h-full w-fit">
              <select
                name="category"
                value={"Add Category"}
                onChange={(e) => {
                  addCtg(e.target.value);
                }}
                id=""
                className="relative h-full w-fit cursor-pointer appearance-none rounded-lg border-none bg-[#222222] px-2 py-1 text-center text-white outline-none transition-all hover:bg-[#121212] sm:text-left"
              >
                <option value="Add Category+" className="hidden">
                  Category
                </option>
                <option value="Technical" className="hover:bg-blue-500">
                  Technical
                </option>
                <option value="Business" className="hover:bg-blue-800">
                  Business
                </option>
                <option value="Design" className="hover:bg-blue-800">
                  Design
                </option>
                <option value="Architecture" className="hover:bg-blue-800">
                  Architecture
                </option>
                <option value="Crypto" className="hover:bg-blue-800">
                  Crypto
                </option>
              </select>
              <i className="fi fi-sr-add pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
            <input
              name="title"
              value={blogData.title}
              onChange={handleChange}
              type="text"
              placeholder="Enter Title"
              className="w-full rounded-lg border-none p-2 outline-none"
            />
          </div>
          <ul className="flex flex-wrap gap-2 text-sm">
            {ctg?.map((ctg, i) => (
              <li
                key={i}
                className={`relative select-none rounded-lg border px-2 py-1 ${
                  clrs[i % clrsLength].border
                } ${clrs[i % clrsLength].bg}`}
              >
                {ctg}
                <i
                  onClick={() => removeCtg(ctg)}
                  className={`fi fi-sr-circle-xmark absolute -right-2 -top-2 cursor-pointer text-${
                    clrs[i % clrsLength].text
                  }`}
                />
              </li>
            ))}
          </ul>

          <div id="desc" className="relative flex-1">
            <textarea
              name="description"
              value={blogData.description}
              onChange={handleChange}
              id=""
              placeholder="Write Your Blog's content"
              className="no-scrollbar h-full w-full resize-none rounded-lg p-2 outline-none"
            ></textarea>
            <button
              onClick={addBlogHandler}
              // onClick={uploadImage}
              className="absolute bottom-4 right-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </main>
      ) : (
        <div className="flex-1" />
      )}
    </>
  );
};

export default Page;

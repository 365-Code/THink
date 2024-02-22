"use State"
import { categories } from "@/lib";
import React, { useState } from "react";

const Discover = (blogs: {setAllBlogs: any}) => {

  const [discover, setDiscover] = useState({
    search: "",
    ctg: "All"
  });

  const handleDiscover = (e: any)=>{
    const {name, value} = e.target
    setDiscover((preVal: any)=> {
      return {
      ...preVal,
      [name]: value
      }
    })
    // if(name == "search" && value == ""){
    //   discoverSearch(null)
    // }
  }

  const discoverSearch = async (e: any)=>{
    e?.preventDefault()
    try{
      const response = await fetch(`/api/blogs/search?ctg=${discover.ctg}&search=${discover.search}`)
      const res = await response.json()
      if(res.success && res.blogs.length){
        blogs.setAllBlogs(res.blogs)
        document.getElementById("main-blogs")?.scrollIntoView()
      }
    }catch(error: any){
      console.log(error);
    }
  }


  return (
    <section
      id="discover"
      className="my-container space-y-4 rounded-md shadow-sm shadow-white/40"
    >
      <div className="inner-container">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Discover Nice Articles Here
        </h1>

        <p className="w-4/5 text-sm capitalize sm:text-lg">
          All the article and contents of the maybe
          <span className="font-semibold">uploaded today</span> and they can
          find your <span className="font-semibold">article and content</span>{" "}
          quickly and without any problem
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <form onSubmit={discoverSearch} className="flex transition-all w-full items-center overflow-hidden rounded-lg bg-[#222222] sm:w-1/2">
            <i id="fi" className="p-4 fi fi-sr-search text-[#ffffff]" />
              <input
                type="search"
                autoComplete="false"
                name="search"
                value={discover.search}
                onChange={handleDiscover}
                id="search-articles"
                className="relative border-none p-4 outline-none transition-all h-full w-full"
                placeholder="Search"
              />
              <button type="submit" />
          </form>

          <div className="no-scrollbar w-full flex-1 overflow-x-scroll">
            <ul className="flex items-center gap-4">
              {
                categories.map((ctg, i)=>(
                  <button key={`ctg-${i}`} name="ctg" value={ctg} onClick={handleDiscover} className={`${discover.ctg == ctg ? "selected-category" : "hover-glow-text" } cursor-pointer transition-all`}>{ctg}</button>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;

"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const Page = () => {

  const [ctg, setCtg] = useState(Array<string>);
  const [sCtg, setSctg] = useState('');

  function removeCtg(category:string){
    setCtg((prevCtg)=>{
      return prevCtg.filter((c)=>(c != category))
    })
  }

  function addCtg(category:string){
    const ind = ctg.findIndex((v)=>{return v == category});
    if(ind != -1){
      return;
    }
    setCtg((prevCtg)=>([...prevCtg, category]))
  }

  let clrs = [
    {
        border: "border-purple-500",
        bg: "hover:bg-purple-500",
        text: "text-purple-500",
    },
    {
        border: "border-cyan-500",
        bg: "hover:bg-cyan-500",
        text: "text-cyan-500",
    },
    {
        border: "border-green-500",
        bg: "hover:bg-green-500",
        text: "text-green-500",
    },
    {
        border: "border-rose-500",
        bg: "hover:bg-rose-500",
        text: "text-rose-500",
    },
  ]

  const clrsLength = clrs.length

  return (
    <main className="my-container-1 flex h-screen flex-col space-y-4">
      <div id="image" className="flex h-[8rem] cursor-pointer items-center justify-center overflow-hidden rounded-xl hover:bg-[#141312]">
        <Image width={1000} height={100} src="https://img.freepik.com/free-photo/view-robot-human-businessperson_23-2150911961.jpg" alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div id="title" className=" relative flex flex-col gap-2 sm:flex-row">
        <div className='relative w-fit h-full'>
          <select onChange={(e)=>{addCtg(e.target.value)}} value={'Add Category'} name="category" id="" className="relative w-fit appearance-none rounded-lg border-none bg-rose-500 px-2 py-1 text-center text-white outline-none sm:text-left h-full cursor-pointer">
            <option value="Add Category+" className="hidden">Category</option>
            <option value="Technical" className="hover:bg-blue-500">Technical</option>
            <option value="Business" className="hover:bg-blue-800">Business</option>
            <option value="Design" className="hover:bg-blue-800">Design</option>
            <option value="Architecture" className="hover:bg-blue-800">Architecture</option>
            <option value="Crypto" className="hover:bg-blue-800">Crypto</option>
          </select>
          <i className="pointer-events-none fi fi-sr-add absolute right-2 top-1/2 -translate-y-1/2" />
        </div>
        <input type="text" placeholder="Enter Title" className="w-full rounded-lg border-none p-2 outline-none" />
      </div>
      <ul className="flex text-sm gap-2">
          {
              ctg?.map( (ctg, i)=>(
                  <li key={i} 
                  className={`relative border px-2 py-1 rounded-lg ${clrs[i%(clrsLength)].border} ${clrs[i%(clrsLength)].bg}`}>
                    {ctg}
                    <i onClick={()=>(removeCtg(ctg))} className={`fi fi-sr-circle-xmark absolute -right-2 -top-2 cursor-pointer ${clrs[i%(clrsLength)].text}`} />
                  </li>
                  )
              )
          }
      </ul>

      <div id="description" className="relative flex-1">
        <textarea name="" id="" placeholder="Write Your Blog's content" className="custom-scrollbar h-full w-full resize-none rounded-lg p-2 outline-none"></textarea>
        <button className="absolute bottom-4 right-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Create</button>
      </div>

    </main>
  )
}

export default Page
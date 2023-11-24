"use client"
import { clrs, clrsLength } from '@/lib';
import { addBlog } from '@/utils/redux/features/blogSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Page = () => {

  const [ctg, setCtg] = useState(Array<string>);
  const [blogData, setBlogData] = useState({
    thumbnail: "https://img.freepik.com/free-photo/view-robot-human-businessperson_23-2150911961.jpg",
    title: "",
    description: ""
  })

  // const [sCtg, setSctg] = useState('');
  const dispatch = useDispatch()
  const nav = useRouter()

  const handleChange = (e:any)=>{
    const {name, value} = e.target
    setBlogData((prev: any)=>{
      return {
        ...prev,
        [name]: value
      }
    })
  }

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

  // const addBlogHandler = ()=>{
  //   const blog = {...blogData, categories: ctg}
  //   // console.log(blog)
  //   dispatch(addBlog(blog))
  //   setBlogData({
  //     thumbnail: "https://img.freepik.com/free-photo/view-robot-human-businessperson_23-2150911961.jpg",
  //   title: "",
  //   description: ""
  //   })
  //   // nav.push('/blogs')
  // }

  const addBlogHandler = async ()=>{

    try{

    } catch (error){
      
    }

  }

  return (
    <main className="my-container-1 flex h-screen flex-col space-y-4">
      <div id="image" className="flex h-[8rem] cursor-pointer items-center justify-center overflow-hidden rounded-xl hover:bg-[#141312]">
        <Image width={1000} height={100} src={blogData.thumbnail} alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div id="title" className=" relative flex flex-col gap-2 sm:flex-row">
        <div className='relative w-fit h-full'>
          <select name="category" value={'Add Category'} onChange={(e)=>{addCtg(e.target.value)}} id="" className="relative w-fit appearance-none rounded-lg border-none bg-[#222222] hover:bg-[#121212] transition-all text-white px-2 py-1 text-center outline-none sm:text-left h-full cursor-pointer">
            <option value="Add Category+" className="hidden">Category</option>
            <option value="Technical" className="hover:bg-blue-500">Technical</option>
            <option value="Business" className="hover:bg-blue-800">Business</option>
            <option value="Design" className="hover:bg-blue-800">Design</option>
            <option value="Architecture" className="hover:bg-blue-800">Architecture</option>
            <option value="Crypto" className="hover:bg-blue-800">Crypto</option>
          </select>
          <i className="fi fi-sr-add absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
        </div>
        <input name='title' value={blogData.title} onChange={handleChange}  type="text" placeholder="Enter Title" className="w-full rounded-lg border-none p-2 outline-none" />
      </div>
      <ul className="flex text-sm gap-2 flex-wrap">
          {
              ctg?.map( (ctg, i)=>(
                  <li key={i} 
                  className={`select-none relative border px-2 py-1 rounded-lg ${clrs[i%(clrsLength)].border} ${clrs[i%(clrsLength)].bg}`}>
                    {ctg}
                    <i onClick={()=>(removeCtg(ctg))} className={`fi fi-sr-circle-xmark absolute -right-2 -top-2 cursor-pointer ${clrs[i%(clrsLength)].text}`} />
                  </li>
                  )
              )
          }
      </ul>

      <div id="desc" className="relative flex-1">
        <textarea name="description" value={blogData.description} onChange={handleChange} id="" placeholder="Write Your Blog's content" className="custom-scrollbar h-full w-full resize-none rounded-lg p-2 outline-none"></textarea>
        <button onClick={addBlogHandler} className="absolute bottom-4 right-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Create</button>
      </div>

    </main>
  )
}

export default Page
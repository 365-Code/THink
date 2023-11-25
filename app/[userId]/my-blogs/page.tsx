"use client"
import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [myBlogs, setMyBlogs] = useState(null)
  const {userId: uId} = useParams();

  useEffect(()=>{
    const fetchMyBlogs = async ()=>{
      const response = await fetch(`/api/blogs/fetchMyBlogs?uId=${uId}`);
      const res = await response.json();
      if(res.success){
        setMyBlogs(myBlogs)
      }
    }
    fetchMyBlogs()
  }, [])

  return (
    <>
    <div className='relative sm:mx-[5rem] mx-12 '>
    <button className='py-2 z-[1] px-4 border-none bg-blue-500 hover:bg-blue-600 rounded-lg'>Create</button>
    </div>
    <Blogs blogs={blogCards}/>
    </>
  )
}

export default Page
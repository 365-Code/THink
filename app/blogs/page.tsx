"use client"
import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import { setBlogs } from '@/utils/redux/features/blogSlice'
import React, { useEffect, useState } from 'react'
import { Selector, useDispatch, useSelector } from 'react-redux'

const Page = () => {

  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState(null)

  useEffect(()=>{

    const fetchAllBlogs = async ()=>{
      const response = await fetch('/api/blogs/fetchAllBlogs');
      // console.log(response)
      const res = await response.json();
      // console.log(res)
      if(res.success){
        setAllBlogs(res.blogs)
        dispatch(setBlogs(res.blogs))
      }
    }

    fetchAllBlogs()

  }, [])
  
  return (
    // <Blogs blogs={blogCards}/>
    <Blogs blogs={allBlogs}/>
  )
}

export default Page
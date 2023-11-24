"use client"
import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import { setBlogs } from '@/utils/redux/features/blogSlice'
import React, { useEffect, useState } from 'react'
import { Selector, useDispatch, useSelector } from 'react-redux'

const Page = () => {

  const dispatch = useDispatch();
  // const [allBlogs, setAllBlogs] = useState(null)

  const allBlogs = useSelector((state:any)=> state.blogReducer.blogs)
  useEffect(()=>{
    dispatch(setBlogs(blogCards))
  }, [])
  
  return (
    <Blogs blogs={blogCards}/>
    // <Blogs blogs={allBlogs}/>
  )
}

export default Page
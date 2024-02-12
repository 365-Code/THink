"use client"
import Blogs from '@/components/Blogs'
import SearchBar from '@/components/SearchBar'
import { setBlogs } from '@/utils/redux/features/blogSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {

  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState(null)

  useEffect(()=>{

    const fetchAllBlogs = async ()=>{
      const response = await fetch('/api/blogs/fetchAllBlogs');
      const res = await response.json();
      if(res.success){
        setAllBlogs(res.blogs)
        dispatch(setBlogs(res.blogs))
      }
    }

    fetchAllBlogs()

  }, [dispatch])
  
  return (
    // <Blogs blogs={blogCards}/>
    <main className='mx-4 sm:mx-auto'>
    <SearchBar setAllBlogs={setAllBlogs} sectionName='blogs-blogs' />
    <div id='blogs-blogs'>
      <Blogs blogs={allBlogs}/>
    </div>
    </main>
  )
}

export default Page
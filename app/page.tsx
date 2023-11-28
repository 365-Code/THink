"use client"
import Articles from '@/components/Articles'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Discover from '@/components/Discover'
import { blogCards } from '@/lib'
import { setBlogs } from '@/utils/redux/features/blogSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {

  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState(Array<any>)

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
  }, [])


  return (
    <main>
      <Discover/>
      <Articles articles={allBlogs.slice(0,3)}/>
      {/* <Blogs blogs={blogCards}/> */}
      <Blogs blogs={allBlogs}/>
      <Contact/>
    </main>
  )
}

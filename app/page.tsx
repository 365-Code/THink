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


  useEffect(()=>{
    dispatch(setBlogs(blogCards))
  }, [])


  return (
    <main>
      <Discover/>
      <Articles/>
      <Blogs blogs={blogCards}/>
      <Contact/>
    </main>
  )
}

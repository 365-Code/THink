"use client"
import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const [myBlogs, setMyBlogs] = useState(null)
  const {userId: uId} = useParams();
  const auth = useSelector((state:any)=>state.authReducer.auth)


  useEffect(()=>{
    const fetchMyBlogs = async ()=>{
      const response = await fetch(`/api/blogs/fetchMyBlogs?uId=${uId}`);
      const res = await response.json();
      if(res.success){
        setMyBlogs(res.blogs)
      }
    }
    fetchMyBlogs()
  }, [])

  return (
    <>
    {
      auth.loggedIn
      ?
      <>
      <div className='relative py-4 w-full flex justify-center'>
        <Link href={'/user/create-blog'} className='fixed sm:mr-[5rem] mx-auto sm:right-0 py-2 z-[1] px-4 border-none bg-blue-500 hover:bg-blue-600 rounded-lg'>Create Post</Link>
      </div>
      <Blogs blogs={myBlogs}/>
      </>
      :
      <div className='my-container-1 text-center'>

        <h1 className='text-2xl sm:text-3xl'>Login to Access this page</h1>
        <Link href={'/auth/login'} className='bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600'>Login</Link>

      </div>

    }
    
    </>
  )
}

export default Page
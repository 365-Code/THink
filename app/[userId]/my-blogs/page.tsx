"use client"
import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const [myBlogs, setMyBlogs] = useState(null)
  const {userId: uId} = useParams();
  const authUser = useSelector((state:any)=>state.authReducer.auth)


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
      authUser.loggedIn
      ?
      <>
      <div className='relative py-4 w-full flex justify-center'>
        <Link href={`/${authUser.user._id}/create-blog`} className='fixed sm:mr-[5rem] mx-auto sm:right-0 py-2 z-[1] px-4 border-none bg-blue-500 hover:bg-blue-600 rounded-lg'>Create Post</Link>
      </div>
      <Blogs blogs={myBlogs}/>
      </>
      :
      <div className='flex-1 flex flex-col justify-center gap-2 text-center items-center'>
        <Image width={300} height={100} className='rounded-lg' src={'https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=740&t=st=1701071330~exp=1701071930~hmac=450c43109a919a76b88fa275fbd0359a43c87662d1752b524130c0ba88276b43'} alt='' />
        <h1 className='mtau text-2xl sm:text-3xl'>Login to Access this page</h1>
        <Link href={'/auth/login'} className='bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600'>Take Me</Link>
      </div>

    }
    
    </>
  )
}

export default Page
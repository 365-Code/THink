"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const authUser = useSelector((state: any) => state.authReducer.auth )
  return (
    <div className='flex-1 flex flex-col gap-3 justify-center items-center '>
        {/* <h1 className='text-xl'>Page Under Construction</h1> */}
        <h1 className='text-xl'>{authUser.user.username}</h1>
        <h2>{authUser.user.email}</h2>
        <Link href={'/'} className='py-2 px-3 rounded-lg bg-[#282828] hover:bg-[#181818] transition-all'>Back to Home</Link>
    </div>
  )
}

export default Page
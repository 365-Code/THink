"use client"
import Blog from '@/components/Blog'
import { useParams } from 'next/navigation'
import React from 'react'
import Comments from '@/components/Comments'

const page = () => {

    const {blog} = useParams()

  return (
  <main className="my-container-1 min-h-screen gap-4 flex md:flex-row flex-col">
    
      <Blog 
      thumbnail='asdf'
      title='This is a blog'
      description='this is the description'
      category={["Technical", "Designing", "Financial", "Business"]}
      />
      <Comments/>

    </main>
  )
}

export default page
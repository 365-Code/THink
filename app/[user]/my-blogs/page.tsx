import Blogs from '@/components/Blogs'
import { blogCards } from '@/lib'
import React from 'react'

const Page = () => {



  return (
    <Blogs blogs={blogCards}/>
  )
}

export default Page
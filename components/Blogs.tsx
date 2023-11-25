"use client"
import React, { useEffect } from 'react'
import BlogCard from './BlogCard'

const Blogs = (props:{blogs:any}) => {
  return (
    <main className="my-container-1">
    <div className="grid min-[815px]:flex min-[815px]:flex-wrap md:justify-between sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:space-y-0 space-y-4 justify-items-center">
        {
          props.blogs?.map((blog:any)=>(
            <BlogCard key={blog._id}
            id={blog._id}
            thumbnail={blog.thumbnail} 
            title={blog.title} 
            description={blog.description}
            datePost={blog.datePost} />
          ))
        }
    </div>
  </main>
  )
}

export default Blogs
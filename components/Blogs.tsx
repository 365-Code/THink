"use client"
import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import BlogCardSkeleton from './BlogCardSkeleton'

const Blogs = (props:{blogs:any}) => {
  return (
    <main className="my-container-1">
    <div className="grid min-[1000px]:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:space-y-0 space-y-4 justify-items-center">
        {
          props.blogs
          ?
          props.blogs.map((blog:any)=>(
            <BlogCard key={blog._id}
            id={blog._id}
            thumbnail={blog.thumbnail} 
            title={blog.title} 
            description={blog.description}
            datePost={blog.datePost} />
          ))
          :
          [1,2,3].map((i)=> 
          <BlogCardSkeleton key={i}/>
          )
        }
    </div>
  </main>
  )
}

export default Blogs
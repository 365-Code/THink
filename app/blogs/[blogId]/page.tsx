"use client"
import Blog from '@/components/Blog'
import { useParams } from 'next/navigation'
import React from 'react'
import {useEffect, useState} from 'react'
import Comments from '@/components/Comments'

const Page = () => {

    const {blogId:bId} = useParams()
    const [blogData, setBlogData] = useState({
      thumbnail: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1700850570~exp=1700851170~hmac=b056ce8644948abe7733f3d6d8225fafcb2edc3187284a2634768942add64f20",
      title: "",
      description: "",
      categories: []
    })

    useEffect(() => {
      const fetchBlog = async ()=>{
        const response = await fetch(`/api/blogs/fetchBlog?bId=${bId}`)
        const res = await response.json();
        console.log(res)
        if(res.success){
          setBlogData(res.blog)
        }
      }

      fetchBlog()
  
    }, [])
    

  return (
  <main className="my-container-1 min-h-screen gap-4 flex md:flex-row flex-col">

      {
        blogData &&
        <>
          <Blog 
          thumbnail={blogData.thumbnail}
          title={blogData.title}
          description={blogData.description}
          // category={["Technical", "Designing", "Financial", "Business"]}
          category={blogData.categories}
          />
          <Comments/>
        </>
    }


    </main>
  )
}

export default Page
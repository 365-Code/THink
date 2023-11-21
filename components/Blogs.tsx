import React from 'react'
import BlogCard from './BlogCard'
import { blogCards } from '@/lib'

const Blogs = () => {
  return (
    <main className="my-container-1">
    <div className="grid md:flex md:flex-wrap md:justify-between sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:space-y-0 space-y-4 justify-items-center">
        {
          blogCards.map((blog, i)=>(
            <BlogCard key={i}
            thumbnail={blog} 
            title="BlogCard - 4" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident fugit, alias animi veniam cumque neque ipsa aspernatur maxime consequatur excepturi praesentium? Ad sapiente eos autem id dolorum accusamus eligendi similique modi, consectetur a. Dolores at, natus doloribus itaque rem iure ea officia voluptatum facere, aperiam inventore quidem enim fugit eveniet qui autem minima possimus tempora repellendus optio culpa voluptates!" />
          ))
        }
    </div>
  </main>
  )
}

export default Blogs
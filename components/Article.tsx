import { splitWords } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Article = (article: { profile: string, user: string, thumbnail: string, title: string, description: string }) => {
  return (
    <div className="transition-all w-full h-full inner-container relative overflow-hidden rounded-lg">

      <div className="absolute left-0 top-0 h-full w-full opacity-60">
        <Image
          height={200}
          width={1000}
          src={article.thumbnail}
          alt="" className="h-full w-full object-cover object-center" />
      </div>

      <div className="relative space-y-2 text-center">
        <div className="mx-auto transition-all flex justify-between w-fit gap-2 items-center rounded-full bg-white hover:bg-[#121212] hover:text-white cursor-pointer px-3 py-2 text-black">
          <div className=" h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full">
            <Image width={64} height={64} src={article.profile} alt="" className="h-full w-full object-cover object-center" />
          </div>
          <span className='font-semibold'>{article.user}</span>
        </div>

        <h2 className="sm:text-2xl text-xl font-bold">{article.title}</h2>
        <p className="sm:text-base text-sm md:w-4/5 mx-auto">
          {
            splitWords(article.description, 20)
          }
          <Link href={`/blogs/${article.title}`} className="text-rose-500 underline">read more</Link>
        </p>
      </div>

    </div>
  )
}

export default Article
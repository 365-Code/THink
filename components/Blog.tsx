import { blogThumbnail } from '@/lib'
import Image from 'next/image'
import React from 'react'

const Blog = (blog:{thumbnail:string, category:Array<string>, title:string, description:string }) => {

    let clrs = [
        {
            border: "border-purple-500",
            bg: "hover:bg-purple-500",
        },
        {
            border: "border-cyan-500",
            bg: "hover:bg-cyan-500",
        },
        {
            border: "border-green-500",
            bg: "hover:bg-green-500",
        },
        {
            border: "border-rose-500",
            bg: "hover:bg-rose-500",
        },
    ]

    return (

            <div className="md:basis-3/5 space-y-4">
                <div className="space-y-2">
                    <div className={`w-full h-[300px] ${!blog.thumbnail && 'animate-pulse'} bg-[#181818] rounded-lg overflow-hidden`}>
                        {
                            blog.thumbnail &&
                            <Image width={1000} height={200} src={blog.thumbnail} alt="" className="h-full w-full object-cover object-center" />
                        }
                    </div>
                    <ul className="flex text-sm gap-2 flex-wrap">
                        {
                            blog.category?.map( (ctg, i)=>(
                                <li key={ctg} className={`select-none border px-2 py-1 rounded-lg ${clrs[i%4].border} ${clrs[i%4].bg}`}>{ctg}</li>
                                )
                            )
                        }
                    </ul>
                </div>

                <h2 className='text-lg'>{blog.title}</h2>

                <p className='whitespace-pre-wrap'>{blog.description}</p>
                {/* <pre className='break-words whitespace-pre-wrap'>{blog.description}</pre> */}

            </div>

    )
}

export default Blog
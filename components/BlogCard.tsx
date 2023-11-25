import {splitWords} from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function BlogCard(blog:{id:string, thumbnail:string, title:string, description:string, datePost: string}){

    return (
        <div className="max-w-[350px] w-full sm:max-w-[320px] space-y-2">

            <div className="w-full h-[350px] rounded-lg overflow-hidden">
                <Image width={400} height={400} src={blog.thumbnail} alt="" className="h-full w-full object-center object-cover hover:scale-105 transition-all" />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                    {
                    splitWords(blog.title, 5)
                    }
                </h3>
                <p className="text-sm whitespace-pre-line">
                    {
                        splitWords(blog.description, 30)
                    }
                </p>
                <hr />
                <div className="flex gap-4 items-center justify-between">
                    <div className="flex gap-2 w-2/5"><i className="fi fi-sr-calendar" /><span>{blog.datePost}</span></div>
                    <div className="flex gap-2 w-2/5"><i className="fi fi-sr-eye"/><span>Views</span></div>
                </div>
            </div>
            <div className='flex text-center items-center'>
                <Link href={`/blogs/${blog.id}`} className="unselected w-full">Read More</Link>
            </div>

        </div>
    )
}
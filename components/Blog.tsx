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
                    <div className="w-full h-[300px] rounded-lg overflow-hidden">
                        <Image width={1000} height={200} src={blogThumbnail} alt="" className="h-full w-full object-cover object-center" />
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

                <h2>Title</h2>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat molestias rerum, ipsum culpa quis voluptatibus nemo incidunt eius fugit quos rem aliquid sunt animi provident odio dolores laboriosam eum ullam distinctio neque. Et rem, perferendis at error consequuntur quia nostrum praesentium repellendus soluta quaerat fugiat cupiditate molestias obcaecati repudiandae alias officia! Quisquam beatae voluptate molestias assumenda repellat, eum iure quia exercitationem consequatur, nobis sequi incidunt maiores consequuntur dolores quas hic ad ipsum quam. Similique ullam quo exercitationem totam eius pariatur vel fugiat laborum, aut consequuntur doloribus ab sapiente? Cum, voluptate. Repellendus blanditiis et saepe ex consectetur, mollitia cum modi consequuntur?</p>

            </div>

    )
}

export default Blog
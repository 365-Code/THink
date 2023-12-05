import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request){

    try{
        connectDB()
        const blog = await request.json()
        const {postedBy, thumbnail, title, description, categories} = blog
        await blogModel.create(blog);
        return NextResponse.json({blog, success: true, msg: "Blog Created"}, {status: 200})
    } catch (error: any){
        const { message: msg } = error;
        return NextResponse.json({success: false, msg}, {status: 500})
    }

}
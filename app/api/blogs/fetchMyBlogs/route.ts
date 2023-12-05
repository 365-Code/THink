import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        connectDB()
        const {searchParams} = new URL(request.url)

        const uId = searchParams.get('uId')
        
        const blogs = await blogModel.find({postedBy: uId})

        return NextResponse.json({
            success: true,
            blogs
        })

    } catch (error: any){
        const { message: msg } = error;
        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
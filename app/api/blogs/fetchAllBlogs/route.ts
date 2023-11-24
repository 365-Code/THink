import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        connectDB()
        const blogs = await blogModel.find({}).populate('postedBy')
        console.log(blogs)
        return NextResponse.json({
            success: true,
            blogs
        })

    } catch (error){
        return NextResponse.json({
            success: false,
            msg: "Error in fetching all blogs"
        }, {status: 500})
    }
}
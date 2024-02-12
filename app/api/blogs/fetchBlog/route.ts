import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        await connectDB()
        const {searchParams} = new URL(request.url)

        const bId = searchParams.get('bId')
        
        const blog = await blogModel.findById(bId)

        if(!blog){
            return NextResponse.json({
                success: false,
                msg: "No Blog Exist"
            }, {status: 404})
        }

        return NextResponse.json({
            success: true,
            blog
        })

    } catch (error: any){
        const { message: msg } = error;
        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
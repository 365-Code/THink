import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";




export async function PUT(request: Request){
    try{

        connectDB()

        const comment = await request.json();
        const {searchParams} = new URL(request.url);
        const bId = searchParams.get('bId');


        const blog = await blogModel.findByIdAndUpdate(bId, {$push: {
            comments: comment
        }})

        if(!blog){
            return NextResponse.json({success: false, msg: "No Blog Found"}, {status: 404})
        }

        return NextResponse.json({success: true, msg: "Comment Added"}, {status: 200})

    } catch (error){
        return NextResponse.json({success: false, msg: "Add Comment Error"}, {status: 500})
    }
}
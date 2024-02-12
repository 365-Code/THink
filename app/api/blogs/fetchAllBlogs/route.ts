import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB();
        const blogs = await blogModel.find({}).populate('postedBy').sort({updatedAt: -1});
        
        return NextResponse.json({
            success: true,
            blogs
        })

    } catch (error: any){
        const {message: msg} = error
        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
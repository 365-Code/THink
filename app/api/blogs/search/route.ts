import blogModel from "@/models/blogModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";




export async function GET(request: NextRequest){
    try {


        const {searchParams} = new URL(request.url)

        const category = searchParams.get('ctg')?.toString()
        const srch = searchParams.get('search')
        const ctg = category == "All" ? srch : category 
        const search = srch == ""? category : srch


        const blogs = await blogModel.find({
            $or:[
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    categories: {$regex: ctg, $options: "i"}
                }
            ]
        }).populate('postedBy')

        return NextResponse.json({
            success: true,
            blogs
        }, {status: 200})
        
    } catch (error: any) {
        const {message: msg} = error;
        return NextResponse.json({
            success: false,
            msg: msg,
        }, {status: 500})
    }
}
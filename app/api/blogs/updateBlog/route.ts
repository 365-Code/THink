import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";




export async function PUT(request: Request){
    try{
        connectDB()
        const {searchParams} = new URL(request.url)

        const bId = searchParams.get('bId')
        const uId = searchParams.get('uId')

        let blog = await blogModel.findOne({_id:bId, postedBy: uId})
        if(!blog){
            return NextResponse.json({
                success: false,
                msg: "UnAuthorized access"
            }, {status: 404})
        }

        const blogData = await request.json()
        const {thumbnail, title,categories,description} = blogData

        await blogModel.findByIdAndUpdate(bId, {$set:{
            thumbnail,
            title,
            categories,
            description
        }})
        
        return NextResponse.json({
            success: true,
            msg: "Updated Successfully"
        })

    } catch (error: any){
        const { message: msg } = error;

        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
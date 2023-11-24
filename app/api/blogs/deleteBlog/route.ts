import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";




export async function DELETE(request: Request){
    try{
        connectDB()
        const {searchParams} = new URL(request.url)

        const bId = searchParams.get('bId')
        const uId = searchParams.get('uId')

        let blog = await blogModel.findOne({_id:bId, postedBy: uId})
        console.log(blog)
        if(!blog){
            return NextResponse.json({
                success: false,
                msg: "UnAuthorized access"
            }, {status: 404})
        }

        await blogModel.findByIdAndDelete(bId)
        
        return NextResponse.json({
            success: true,
            msg: "Deleted Successfully"
        })

    } catch (error){
        return NextResponse.json({
            success: false,
            msg: "Error in delete Blog"
        }, {status: 500})
    }
}
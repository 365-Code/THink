import userModel from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function PUT(request: Request){
    try{
        await connectDB()
        const user = await request.json();
        await userModel.findById(user._id)

        if(!userModel){
            return NextResponse.json({
                success: false,
                msg: "Some Error Occure"
            })
        }

        await userModel.findByIdAndUpdate(user._id, user);
        return NextResponse.json({
            success: true,
            msg: "Successfully registered"
        })

    } catch (error: any){
        const { message: msg } = error;
        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
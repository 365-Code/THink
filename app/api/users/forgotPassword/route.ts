import userModel from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";




export async function PUT(request: Request){
    try{

        connectDB()

        const user = await request.json();

        const exUser = await userModel.findOne({email: user.email})

        if(!exUser){
            return NextResponse.json({
                success: false,
                msg: "Invalid Credentials"
            }, {status: 404})
        }

        return NextResponse.json({
            success: true,
            msg: "Password Reset Successfully"
        })

    }catch(error){
        return NextResponse.json({
            success: false,
            msg: "Error in Forgot Password"
        }, {status: 500})
    }
}
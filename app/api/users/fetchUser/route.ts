import userModel from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";



export async function POST(request: Request){
    try{

        connectDB()
        const user = await request.json();
        const existingUser = await userModel.findOne({email: user.email})

        if (!existingUser){
            return NextResponse.json({
                success: false,
                msg: "Invalid credentials"
            }, {status: 404})
        }

        return NextResponse.json({
            success: true,
            user: existingUser
        })

    } catch (error){
        return NextResponse.json({
            success: false,
            msg: "Error in register"
        }, {status: 500})
    }
}
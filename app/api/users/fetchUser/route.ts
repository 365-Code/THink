import userModel from "@/models/userModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";



export async function POST(request: Request){
    try{

        await connectDB()
        const user = await request.json();
        const exUser = await userModel.findOne({email: user.email})

        if (!exUser){
            return NextResponse.json({
                success: false,
                msg: "Invalid credentials"
            }, {status: 404})
        }

        return NextResponse.json({
            success: true,
            user: exUser
        })

    } catch (error: any){
        const { message: msg } = error;

        return NextResponse.json({
            success: false,
            msg
        }, {status: 500})
    }
}
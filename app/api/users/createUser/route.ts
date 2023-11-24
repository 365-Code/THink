import userModel from "@/models/userModel";
import connectDB from "@/utils/db.js";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        connectDB()
        const user = await request.json();

        await userModel.create(user)

        return NextResponse.json({
            success: true,
            msg: "Successfully registered"
        })

    } catch (error){
        return NextResponse.json({
            success: false,
            msg: "Error in register"
        }, {status: 500})
    }
}
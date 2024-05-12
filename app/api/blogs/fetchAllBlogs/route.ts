import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 20;
export async function GET() {
  try {
    await connectDB();
    const blogs = await blogModel
      .find({})
      .sort({ updatedAt: -1 })
      .populate("postedBy");
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 },
    );
  }
}

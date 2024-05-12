import blogModel from "@/models/blogModel";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 100
export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const blogs = await blogModel
      .find({})
      .populate("postedBy")
      .sort({ updatedAt: -1 });
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 },
    );
  }
}

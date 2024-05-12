import blogModel from "@/models/blogModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
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

import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request: NextRequest, { params }) => {
    const { id } = params
  try {
    await connect();
      const post = await Post.findById(id);
      // console.log(JSON.stringify(post));
      
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse("POST DELETED", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
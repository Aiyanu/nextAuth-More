import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url)
    const username = url.searchParams.get("username")
    try {
        await connect()
        const posts = await Post.find(username && {username})
        return new NextResponse(JSON.stringify(posts),{status:200})
    } catch (err) {
        return new NextResponse("Database Error",{status:500})
    }
}
export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const newPost = new Post(body)
    try {
        await connect()
        await newPost.save()
        return new NextResponse("POST CREATED", { status: 201 })
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

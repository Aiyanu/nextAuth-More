import { connect } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/models/User";

export const POST = async (req: NextRequest) => {
    const { name, email, password } = await req.json()
    await connect()
    const hashPassword = await bcrypt.hash(password,5)
    const newUser = new User({
        name,email,password:hashPassword
    })
    try { 
        await newUser.save()
        return new NextResponse("User created", {
            status:201
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status:500
        })
    }
}
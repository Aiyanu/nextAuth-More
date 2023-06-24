import mongoose from "mongoose"

export const connect = async () => {
    try {
        await mongoose.connect(String(process.env.MONGO))
        
    } catch (err) {
        throw new Error("Connection failed")
    }
}
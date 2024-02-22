import userModel from "@/models/userModel";
import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL || "")
        await userModel.find({});
    } catch(error){
        return error
    }
}


export default connectDB
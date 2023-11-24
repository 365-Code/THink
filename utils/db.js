import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)
    } catch(error){
        return error
    }
}


export default connectDB
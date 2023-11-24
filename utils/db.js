import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        const uri = process.env.NEXT_PUBLIC_MONGO_URL
        await mongoose.connect(uri)
    } catch(error){
        return error
    }
}


export default connectDB
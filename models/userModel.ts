import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profile:{
        type: String,
        default: "https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-blue-background_745528-3003.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated"
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})


const userModel = mongoose.models.User || mongoose.model('User', userSchema)

export default userModel
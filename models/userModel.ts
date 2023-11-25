import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
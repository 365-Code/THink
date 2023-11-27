import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    categories:{
        type: Array,
        required: true
    },
    views:{
        type: Number,
        default: 0
    },
    datePost:{
        type: String,
        default: new Date().toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                })
    },
    comments:{
        type: Array
    }
}, {timestamps: true})


const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default blogModel
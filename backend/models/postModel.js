import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "user"},
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true
})

export default mongoose.model("post", postSchema, "posts")
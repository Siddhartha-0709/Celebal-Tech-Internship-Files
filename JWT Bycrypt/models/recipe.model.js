import mongoose from "mongoose";
import { type } from "os";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: [String],
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    videoURL:{
        type: String,
        default: null
    },
    postedBy: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        default: 0
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
}, { timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
import mongoose from "mongoose";
const imagesSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    imageURL: { type: String, required: true },
    title: String,
    timestamp: { type: Date, default: Date.now },
    },
    { collection: "images"}
);

export default imagesSchema;
import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // Tag name, unique for each tag
    description: String, 
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "tags" }
);

export default tagSchema;

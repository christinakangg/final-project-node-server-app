import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ImageModel", schema);
export default model;
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    role: {
        type: String,
        enum: [, "ADMIN", "USER", "ANONYMOUS"],
        default: "USER",
      },
    },
    { collection: "users"}
);
export default userSchema;

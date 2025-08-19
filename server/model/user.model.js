import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

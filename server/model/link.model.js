import mongoose from "mongoose";

const linkSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    alias: {
      type: String,
      required: true,
      unique: true,
    },
    user: { type: String, ref: "User" },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Link = mongoose.model("Link", linkSchema);

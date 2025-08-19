import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to database");
    });
  } catch (err) {
    console.error("Mongodb Connection Error: ", err);
    process.exit(1);
  }
};

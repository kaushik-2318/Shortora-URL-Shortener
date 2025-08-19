import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import linkRoutes from "./routes/link.routes.js";
import getLinkRoutes from "./routes/getLinkRoutes.routes.js";
import getHistoryRoutes from "./routes/getHistoryRoutes.routes.js";
const app = express();
import { clerkMiddleware } from "@clerk/express";

app.use(clerkMiddleware());


dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/check", (req, res) => {
  res.status(200).json({ message: "Server is up!" });
});

app.use("/auth", userRoutes);
app.use("/link", linkRoutes);
app.use("/getLink", getLinkRoutes);
app.use("/history", getHistoryRoutes);

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

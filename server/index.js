import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import linkRoutes from "./routes/link.routes.js";
import getLinkRoutes from "./routes/getLinkRoutes.routes.js";
import getHistoryRoutes from "./routes/getHistoryRoutes.routes.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [process.env.CLIENT_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  })
);

app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/check", (req, res) => {
  res.status(200).json({ message: "Server is up!" });
});

app.use("/auth", userRoutes);
app.use("/link", linkRoutes);
app.use("/getLink", getLinkRoutes);
app.use("/history", getHistoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

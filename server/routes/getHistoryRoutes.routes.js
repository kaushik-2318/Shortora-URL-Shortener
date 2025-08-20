import express from "express";
import { User } from "../model/user.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const userId = req.auth?.userId;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const history = await User.findOne({ clerkId: userId }).populate("links");

    if (!history) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(history.links);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;

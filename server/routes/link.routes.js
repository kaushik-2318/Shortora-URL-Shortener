import { Link } from "../model/link.model.js";
import { User } from "../model/user.model.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const userId = req.auth?.userId;
    const body = req.body;

    if (!body.originalUrl) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const existingLink = await Link.findOne({ shortUrl: body.alias });
    if (existingLink) {
      return res
        .status(400)
        .json({ error: "Link with this alias already exists" });
    }

    const newLink = new Link({
      url: body.originalUrl,
      shortUrl: body.shortUrl,
      alias: body.alias,
      user: null,
      password: body.password,
    });
    await newLink.save();

    if (userId) {
      const user = await User.findOneAndUpdate(
        { clerkId: userId },
        { $push: { links: newLink._id } },
        { new: true, upsert: true }
      );

      newLink.user = user._id;
      await newLink.save();
    }

    res.status(200).json({ message: "Link created", link: newLink.shortUrl });
  } catch (error) {
    console.error("Error creating link:", error);
    res.status(500).json({ error: "Failed to create link" });
  }
});

export default router;

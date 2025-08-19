import { requireAuth } from "@clerk/express";
import { User } from "../model/user.model.js";
import { clerkClient } from "@clerk/clerk-sdk-node";
import express from "express";

const router = express.Router();

router.post("/sync", requireAuth(), async (req, res) => {
  try {
    const { userId } = req.auth();

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No userId found" });
    }

    const clerkUser = await clerkClient.users.getUser(userId);

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = new User({
        clerkId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
      });
      await user.save();
    }

    res.status(200).json({ message: "User synced", user });
  } catch (err) {
    console.error("Sync error:", err);
    res.status(500).json({ error: "Failed to sync user" });
  }
});

export default router;

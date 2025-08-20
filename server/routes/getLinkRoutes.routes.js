import express from "express";
import { Link } from "../model/link.model.js";

const router = express.Router();

router.get("/:alias", async (req, res) => {
  try {
    const { alias } = req.params;
    const link = await Link.findOne({ alias });
    if (!link) {
      return res.status(404).json({ error: "Link not found" });
    }
    res.status(200).json({ url: link.url, pass: link.password });
  } catch (error) {
    console.error("Error fetching link:", error);
    res.status(500).json({ error: "Failed to fetch link" });
  }
});

export default router;
